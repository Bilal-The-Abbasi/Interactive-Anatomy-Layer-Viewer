import { useRef, useState, useCallback, lazy, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnatomyStore } from '../store/anatomyStore'
import HotspotOverlay from './HotspotOverlay'

// Lazy-load anatomy layers for performance
const SkinLayer        = lazy(() => import('./layers/SkinLayer'))
const MuscularLayer    = lazy(() => import('./layers/MuscularLayer'))
const SkeletalLayer    = lazy(() => import('./layers/SkeletalLayer'))
const CirculatoryLayer = lazy(() => import('./layers/CirculatoryLayer'))
const NervousLayer     = lazy(() => import('./layers/NervousLayer'))
const RespiratoryLayer = lazy(() => import('./layers/RespiratoryLayer'))
const DigestiveLayer   = lazy(() => import('./layers/DigestiveLayer'))
const LymphaticLayer   = lazy(() => import('./layers/LymphaticLayer'))

// Bottom-to-top render order: skin is deepest, nervous is topmost
const LAYER_ORDER = [
  { id: 'skin',        Component: SkinLayer        },
  { id: 'muscular',    Component: MuscularLayer     },
  { id: 'skeletal',    Component: SkeletalLayer     },
  { id: 'digestive',   Component: DigestiveLayer    },
  { id: 'respiratory', Component: RespiratoryLayer  },
  { id: 'lymphatic',   Component: LymphaticLayer    },
  { id: 'circulatory', Component: CirculatoryLayer  },
  { id: 'nervous',     Component: NervousLayer      },
]

// Keep LAYER_STACK as alias for backward compat
const LAYER_STACK = LAYER_ORDER

const MIN_ZOOM  = 0.5
const MAX_ZOOM  = 3.0
const ZOOM_STEP = 0.25

// Small shimmer placeholder while a layer loads
function LayerFallback() {
  return (
    <div
      style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    />
  )
}

// Controls panel (bottom-right)
function ViewControls({ zoom, onZoomIn, onZoomOut, onReset }) {
  return (
    <div
      className="absolute bottom-6 right-6 flex flex-col gap-1.5 z-20"
      style={{ pointerEvents: 'all' }}
    >
      {[
        { label: '+', action: onZoomIn,  title: 'Zoom in'  },
        { label: '−', action: onZoomOut, title: 'Zoom out' },
        { label: '⟳', action: onReset,   title: 'Reset view' },
      ].map(({ label, action, title }) => (
        <motion.button
          key={label}
          onClick={action}
          title={title}
          className="w-9 h-9 flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            background: 'rgba(5,15,30,0.88)',
            border: '1px solid rgba(59,130,246,0.18)',
            color: 'rgba(148,163,184,0.8)',
            backdropFilter: 'blur(12px)',
          }}
          whileHover={{
            scale: 1.08,
            background: 'rgba(59,130,246,0.15)',
            borderColor: 'rgba(59,130,246,0.4)',
            color: '#93c5fd',
          }}
          whileTap={{ scale: 0.94 }}
        >
          {label}
        </motion.button>
      ))}
    </div>
  )
}

// Zoom level badge
function ZoomBadge({ zoom }) {
  return (
    <AnimatePresence>
      {Math.abs(zoom - 1) > 0.05 && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="px-3 py-1 rounded-full text-xs font-mono"
            style={{
              background: 'rgba(5,15,30,0.85)',
              border: '1px solid rgba(59,130,246,0.2)',
              color: 'rgba(148,163,184,0.7)',
              backdropFilter: 'blur(8px)',
            }}
          >
            {zoom.toFixed(1)}×
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Background grid decoration
function BackgroundGrid() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(rgba(59,130,246,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59,130,246,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
  )
}

export default function LayeredViewer() {
  const { activeSystems, layerOpacities, isolatedSystem } = useAnatomyStore()

  const [zoom, setZoom]       = useState(1.0)
  const [panX, setPanX]       = useState(0)
  const [panY, setPanY]       = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const dragStart = useRef(null)
  const containerRef = useRef()

  // Compute per-layer effective opacity
  // - Inactive system → 0
  // - Isolated system exists and this is NOT it → 0.08 (dim ghost)
  // - Otherwise → layerOpacities[id] (default 1)
  const getOpacity = useCallback((systemId) => {
    if (!activeSystems[systemId]) return 0
    if (isolatedSystem && isolatedSystem !== systemId) return 0.08
    return layerOpacities[systemId] ?? 1
  }, [activeSystems, layerOpacities, isolatedSystem])

  // ── Wheel zoom (zoom toward cursor position) ────────────────────────────────
  const handleWheel = useCallback((e) => {
    e.preventDefault()
    const step = e.deltaY < 0 ? 0.12 : -0.12
    const rect  = containerRef.current?.getBoundingClientRect()
    if (!rect) return

    setZoom((prev) => {
      const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, prev + step))
      if (next === prev) return prev
      // Zoom toward cursor
      const cursorX = e.clientX - rect.left - rect.width  / 2
      const cursorY = e.clientY - rect.top  - rect.height / 2
      const scale   = next / prev
      setPanX((px) => cursorX + (px - cursorX) * scale)
      setPanY((py) => cursorY + (py - cursorY) * scale)
      return next
    })
  }, [])

  // ── Drag pan ────────────────────────────────────────────────────────────────
  const handleMouseDown = useCallback((e) => {
    if (e.button !== 0) return
    setIsDragging(true)
    dragStart.current = { x: e.clientX - panX, y: e.clientY - panY }
  }, [panX, panY])

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !dragStart.current) return
    setPanX(e.clientX - dragStart.current.x)
    setPanY(e.clientY - dragStart.current.y)
  }, [isDragging])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    dragStart.current = null
  }, [])

  // ── Double-click reset ──────────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    setIsAnimating(true)
    setZoom(1)
    setPanX(0)
    setPanY(0)
    setTimeout(() => setIsAnimating(false), 350)
  }, [])

  const handleZoomIn  = useCallback(() => setZoom((z) => Math.min(MAX_ZOOM, z + ZOOM_STEP)), [])
  const handleZoomOut = useCallback(() => setZoom((z) => Math.max(MIN_ZOOM, z - ZOOM_STEP)), [])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full select-none overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 55% 70% at 50% 46%, #0d1f3c 0%, #050a15 72%)',
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={handleReset}
    >
      <BackgroundGrid />

      {/* Ambient radial glow behind the figure */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: [
            'radial-gradient(ellipse 38% 55% at 50% 48%, rgba(59,130,246,0.055) 0%, transparent 65%)',
            'radial-gradient(ellipse 25% 30% at 30% 25%, rgba(79,195,247,0.03) 0%, transparent 60%)',
            'radial-gradient(ellipse 20% 25% at 72% 72%, rgba(192,132,252,0.025) 0%, transparent 55%)',
          ].join(', '),
        }}
      />

      {/* Pannable / zoomable stage */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          transform: `translate(${panX}px, ${panY}px) scale(${zoom})`,
          transformOrigin: 'center center',
          transition: isDragging || isAnimating === false ? 'none' : 'transform 0.3s cubic-bezier(0.4,0,0.2,1)',
          willChange: 'transform',
        }}
      >
        {/* SVG layer stack — all layers share identical viewBox */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {LAYER_STACK.map(({ id, Component }) => {
            const eff = getOpacity(id)
            return (
              <div
                key={id}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: eff,
                  transition: 'opacity 0.45s cubic-bezier(0.4,0,0.2,1)',
                  pointerEvents: eff > 0.05 ? 'none' : 'none',
                }}
              >
                <Suspense fallback={<LayerFallback />}>
                  <Component />
                </Suspense>
              </div>
            )
          })}

          {/* Hotspot overlay sits above all SVG layers */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <HotspotOverlay zoom={zoom} />
          </div>
        </div>
      </div>

      {/* UI overlays (outside the pannable stage so they stay fixed) */}
      <ViewControls
        zoom={zoom}
        onZoomIn={handleZoomIn}
        onZoomOut={handleZoomOut}
        onReset={handleReset}
      />
      <ZoomBadge zoom={zoom} />

      {/* Vignette to frame the viewer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 52%, rgba(5,10,21,0.7) 100%)',
        }}
      />
    </div>
  )
}
