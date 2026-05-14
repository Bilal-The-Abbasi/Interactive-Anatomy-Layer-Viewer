import { motion } from 'framer-motion'
import { useAnatomyStore } from '../store/anatomyStore'
import { ANATOMY_PARTS } from '../data/anatomySystems'

/**
 * Interactive hotspot regions overlaid on the SVG anatomy figure.
 * Coordinates match the viewBox="0 0 400 900" body canvas.
 * Each hotspot is an invisible clickable SVG region mapped to an anatomy part.
 */
const HOTSPOTS = [
  // ── Nervous system ──────────────────────────────────────────────────────────
  { partId: 'brain',         cx: 200, cy: 73,  rx: 50,  ry: 54,  label: 'Brain' },
  { partId: 'spinal_cord',   cx: 200, cy: 310, rx: 8,   ry: 120, label: 'Spinal Cord' },

  // ── Circulatory ─────────────────────────────────────────────────────────────
  { partId: 'heart',         cx: 190, cy: 275, rx: 28,  ry: 30,  label: 'Heart' },
  { partId: 'aorta',         cx: 200, cy: 240, rx: 10,  ry: 18,  label: 'Aorta' },
  { partId: 'veins',         cx: 218, cy: 280, rx: 8,   ry: 22,  label: 'Veins' },

  // ── Respiratory ─────────────────────────────────────────────────────────────
  { partId: 'left_lung',     cx: 166, cy: 305, rx: 30,  ry: 70,  label: 'Left Lung' },
  { partId: 'right_lung',    cx: 222, cy: 310, rx: 30,  ry: 70,  label: 'Right Lung' },
  { partId: 'trachea',       cx: 200, cy: 210, rx: 9,   ry: 28,  label: 'Trachea' },

  // ── Digestive ───────────────────────────────────────────────────────────────
  { partId: 'liver',         cx: 222, cy: 295, rx: 33,  ry: 36,  label: 'Liver' },
  { partId: 'stomach',       cx: 177, cy: 305, rx: 24,  ry: 28,  label: 'Stomach' },
  { partId: 'small_intestine', cx: 200, cy: 398, rx: 42, ry: 50, label: 'Small Intestine' },
  { partId: 'large_intestine', cx: 200, cy: 398, rx: 52, ry: 58, label: 'Large Intestine' },
  { partId: 'kidneys',       cx: 230, cy: 358, rx: 16,  ry: 22,  label: 'Kidneys' },

  // ── Skeletal ────────────────────────────────────────────────────────────────
  { partId: 'skull',         cx: 200, cy: 78,  rx: 58,  ry: 64,  label: 'Skull' },
  { partId: 'ribcage',       cx: 200, cy: 290, rx: 55,  ry: 65,  label: 'Ribcage' },
  { partId: 'spine',         cx: 200, cy: 320, rx: 8,   ry: 130, label: 'Spine' },
  { partId: 'pelvis',        cx: 200, cy: 468, rx: 55,  ry: 28,  label: 'Pelvis' },
  { partId: 'femur',         cx: 163, cy: 558, rx: 18,  ry: 80,  label: 'Femur' },
  { partId: 'tibia',         cx: 162, cy: 718, rx: 14,  ry: 60,  label: 'Tibia' },
  { partId: 'humerus',       cx: 101, cy: 265, rx: 15,  ry: 70,  label: 'Humerus' },

  // ── Muscular ────────────────────────────────────────────────────────────────
  { partId: 'biceps',        cx: 98,  cy: 258, rx: 18,  ry: 55,  label: 'Biceps' },
  { partId: 'deltoid',       cx: 102, cy: 197, rx: 22,  ry: 22,  label: 'Deltoid' },
  { partId: 'quadriceps',    cx: 163, cy: 555, rx: 22,  ry: 75,  label: 'Quadriceps' },

  // ── Lymphatic ───────────────────────────────────────────────────────────────
  { partId: 'lymph_nodes',   cx: 185, cy: 155, rx: 14,  ry: 12,  label: 'Lymph Nodes' },
  { partId: 'thymus',        cx: 200, cy: 208, rx: 18,  ry: 20,  label: 'Thymus' },
]

function Hotspot({ hotspot, zoom }) {
  const { setHoveredPart, setSelectedPart, hoveredPart, selectedPart } = useAnatomyStore()
  const part = ANATOMY_PARTS.find((p) => p.id === hotspot.partId)
  if (!part) return null

  const isHovered = hoveredPart?.id === hotspot.partId
  const isSelected = selectedPart?.id === hotspot.partId

  return (
    <g>
      {/* Invisible hit target */}
      <ellipse
        cx={hotspot.cx}
        cy={hotspot.cy}
        rx={hotspot.rx}
        ry={hotspot.ry}
        fill="transparent"
        stroke="transparent"
        style={{ cursor: 'pointer' }}
        onMouseEnter={() => setHoveredPart(part)}
        onMouseLeave={() => setHoveredPart(null)}
        onClick={(e) => { e.stopPropagation(); setSelectedPart(part) }}
      />

      {/* Visible indicator when hovered or selected */}
      {(isHovered || isSelected) && (
        <motion.ellipse
          cx={hotspot.cx}
          cy={hotspot.cy}
          rx={hotspot.rx + 2}
          ry={hotspot.ry + 2}
          fill="none"
          stroke={isSelected ? '#60a5fa' : 'rgba(96,165,250,0.7)'}
          strokeWidth={isSelected ? 2 : 1.5}
          strokeDasharray={isSelected ? 'none' : '4 3'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{ pointerEvents: 'none' }}
        />
      )}

      {/* Pulse ring on selected */}
      {isSelected && (
        <motion.ellipse
          cx={hotspot.cx}
          cy={hotspot.cy}
          rx={hotspot.rx}
          ry={hotspot.ry}
          fill="rgba(59,130,246,0.06)"
          stroke="rgba(96,165,250,0.3)"
          strokeWidth={1}
          animate={{
            rx: [hotspot.rx, hotspot.rx + 8, hotspot.rx],
            ry: [hotspot.ry, hotspot.ry + 8, hotspot.ry],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ pointerEvents: 'none' }}
        />
      )}
    </g>
  )
}

export default function HotspotOverlay({ zoom = 1 }) {
  const { setSelectedPart } = useAnatomyStore()

  return (
    <svg
      viewBox="0 0 400 900"
      preserveAspectRatio="xMidYMid meet"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'all',
      }}
      onClick={() => setSelectedPart(null)}
    >
      {HOTSPOTS.map((hotspot) => (
        <Hotspot key={hotspot.partId} hotspot={hotspot} zoom={zoom} />
      ))}
    </svg>
  )
}
