/**
 * AnatomyViewer.jsx
 *
 * Root R3F Canvas wrapper for the Human Anatomy Layer Explorer.
 *
 * Renders:
 *   • Dark CSS gradient background (#050a15)
 *   • R3F <Canvas> with shadow support and a 50° FOV camera
 *   • Post-processing: Bloom for the emissive glow effect
 *   • SceneLighting  – multi-light medical aesthetic rig
 *   • CameraRig      – smooth view-mode / part-focus camera
 *   • HumanFigure    – the full procedural anatomy model
 *   • A faint floor grid at Y = -2.1
 *   • 20 slowly-drifting ambient particles
 */

import React, { Suspense, useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

import SceneLighting from './SceneLighting'
import CameraRig     from './CameraRig'
import HumanFigure   from './HumanFigure'

// ─── Constants ────────────────────────────────────────────────────────────────

const PARTICLE_COUNT = 20
const FLOAT_SPEED    = 0.025   // world units / second base drift speed
const SPREAD_XZ      = 4.5     // half-extent of the XZ distribution
const Y_BOTTOM       = -3.5
const Y_TOP          = 3.5

// ─── Floating Particle ────────────────────────────────────────────────────────

/**
 * Single animated particle. Floats upward, sways gently, and wraps from
 * Y_TOP back to Y_BOTTOM.
 */
function Particle({ x, initY, z, speed, phase }) {
  const meshRef  = useRef()
  const yRef     = useRef(initY)
  const clockRef = useRef(0)

  useFrame((_, delta) => {
    if (!meshRef.current) return
    clockRef.current += delta

    // Vertical drift
    yRef.current += speed * delta
    if (yRef.current > Y_TOP) yRef.current = Y_BOTTOM

    // Lateral sway
    const swayX = Math.sin(clockRef.current * 0.4 + phase) * 0.12
    const swayZ = Math.cos(clockRef.current * 0.3 + phase) * 0.08

    meshRef.current.position.set(x + swayX, yRef.current, z + swayZ)
  })

  return (
    <mesh ref={meshRef} position={[x, initY, z]}>
      <sphereGeometry args={[0.01, 4, 3]} />
      <meshStandardMaterial
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={0.6}
        opacity={0.18}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

// ─── Floating Particles Group ─────────────────────────────────────────────────

function FloatingParticles() {
  const particles = useMemo(() => {
    const arr = []
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      arr.push({
        x:     (Math.random() - 0.5) * SPREAD_XZ * 2,
        y:     Y_BOTTOM + Math.random() * (Y_TOP - Y_BOTTOM),
        z:     (Math.random() - 0.5) * SPREAD_XZ * 2,
        speed: FLOAT_SPEED * (0.4 + Math.random() * 0.8),
        phase: Math.random() * Math.PI * 2,
      })
    }
    return arr
  }, [])

  return (
    <group name="floating-particles">
      {particles.map((p, i) => (
        <Particle
          key={i}
          x={p.x}
          initY={p.y}
          z={p.z}
          speed={p.speed}
          phase={p.phase}
        />
      ))}
    </group>
  )
}

// ─── Floor Grid ───────────────────────────────────────────────────────────────

function FloorGrid() {
  return (
    <gridHelper
      args={[10, 20, '#0d2a45', '#0a1e35']}
      position={[0, -2.1, 0]}
    />
  )
}

// ─── Loading Fallback ─────────────────────────────────────────────────────────

function LoadingFallback() {
  return (
    <div
      style={{
        position:        'absolute',
        inset:           0,
        display:         'flex',
        alignItems:      'center',
        justifyContent:  'center',
        color:           '#4fc3f7',
        fontFamily:      'system-ui, -apple-system, sans-serif',
        fontSize:        '0.875rem',
        letterSpacing:   '0.1em',
        textTransform:   'uppercase',
        opacity:         0.7,
      }}
    >
      Initialising anatomy viewer…
    </div>
  )
}

// ─── Scene Contents (runs inside the WebGL context) ──────────────────────────

function SceneContents() {
  return (
    <>
      {/* Background colour set on the canvas itself */}
      <color attach="background" args={['#050a15']} />

      {/* Subtle depth fog to fade far geometry */}
      <fog attach="fog" args={['#050a15', 9, 22]} />

      {/* Lighting rig */}
      <SceneLighting />

      {/* Camera + OrbitControls */}
      <CameraRig />

      {/* Anatomy model – wrapped in Suspense to allow asset deferred loading */}
      <Suspense fallback={null}>
        <HumanFigure />
      </Suspense>

      {/* Environment helpers */}
      <FloorGrid />
      <FloatingParticles />

      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.3}
          intensity={0.8}
          radius={0.5}
          mipmapBlur
        />
      </EffectComposer>
    </>
  )
}

// ─── AnatomyViewer ────────────────────────────────────────────────────────────

/**
 * Drop this anywhere in the React tree. It fills 100 % of the parent's
 * width and height, so wrap it in a sized container.
 */
export default function AnatomyViewer() {
  return (
    <div
      style={{
        position:   'relative',
        width:      '100%',
        height:     '100%',
        overflow:   'hidden',
        background: 'radial-gradient(ellipse at 40% 30%, #0d1f3c 0%, #050a15 70%)',
      }}
    >
      {/* Purely decorative CSS ambient glow — zero GPU cost */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse 60% 40% at 20% 80%, rgba(79,195,247,0.04) 0%, transparent 70%)',
            'radial-gradient(ellipse 50% 35% at 80% 20%, rgba(192,132,252,0.04) 0%, transparent 70%)',
          ].join(', '),
        }}
      />

      {/* Canvas – mounted over the CSS background */}
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 50 }}
          style={{
            position: 'absolute',
            inset:    0,
            width:    '100%',
            height:   '100%',
          }}
          gl={{
            antialias:        true,
            alpha:            false,
            powerPreference:  'high-performance',
          }}
          dpr={[1, 2]}
          frameloop="always"
        >
          <SceneContents />
        </Canvas>
      </Suspense>

      {/* Vignette overlay – keeps edges dark and focuses the eye on the figure */}
      <div
        aria-hidden="true"
        style={{
          position:      'absolute',
          inset:         0,
          pointerEvents: 'none',
          background:    'radial-gradient(ellipse at center, transparent 50%, rgba(5,10,21,0.65) 100%)',
        }}
      />
    </div>
  )
}
