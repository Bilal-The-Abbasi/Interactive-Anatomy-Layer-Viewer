import React, { Suspense, useRef, useMemo, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { useFrame } from '@react-three/fiber'
import { useProgress } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { motion, AnimatePresence } from 'framer-motion'
import HumanFigure from './HumanFigure'
import SceneLighting from './SceneLighting'
import CameraRig from './CameraRig'

// ─── GLB loading progress bar ─────────────────────────────────────────────────
function GLBLoadingOverlay() {
  const { progress, active } = useProgress()
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (!active && progress >= 100) {
      const t = setTimeout(() => setVisible(false), 800)
      return () => clearTimeout(t)
    }
    setVisible(true)
  }, [active, progress])
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute', bottom: 24, left: '50%',
            transform: 'translateX(-50%)', zIndex: 30,
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
            pointerEvents: 'none',
          }}
        >
          <div style={{
            width: 200, height: 2,
            background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden',
          }}>
            <motion.div
              style={{
                height: '100%',
                background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)',
                borderRadius: 2,
              }}
              animate={{ width: `${Math.max(5, progress)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span style={{
            color: 'rgba(148,163,184,0.5)', fontSize: '0.6rem',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            fontFamily: 'system-ui, sans-serif',
          }}>
            {progress < 100 ? `Loading anatomy models ${Math.round(progress)}%` : 'Ready'}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// ─── Ambient floating particles ───────────────────────────────────────────────
const PARTICLE_COUNT = 40
const SPREAD_XZ = 3.5
const Y_BOTTOM = -2.2
const Y_TOP = 2.2
const FLOAT_SPEED = 0.18

function ParticleSimple({ x, initY, z, speed, phase }) {
  const ref = useRef()
  useFrame(({ clock }) => {
    if (!ref.current) return
    const t = clock.getElapsedTime()
    ref.current.position.y = initY + Math.sin(t * speed + phase) * 0.3
    ref.current.material.opacity = 0.15 + 0.1 * Math.sin(t * speed * 1.3 + phase)
  })
  return (
    <mesh ref={ref} position={[x, initY, z]}>
      <sphereGeometry args={[0.012, 4, 4]} />
      <meshBasicMaterial color="#4fc3f7" transparent opacity={0.15} />
    </mesh>
  )
}

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
        <ParticleSimple key={i} x={p.x} initY={p.y} z={p.z} speed={p.speed} phase={p.phase} />
      ))}
    </group>
  )
}

function FloorGrid() {
  return <gridHelper args={[10, 20, '#0d2a45', '#0a1e35']} position={[0, -2.1, 0]} />
}

function SceneContents() {
  return (
    <>
      <color attach="background" args={['#050a15']} />
      <fog attach="fog" args={['#050a15', 9, 22]} />
      <SceneLighting />
      <CameraRig />
      <Suspense fallback={null}>
        <HumanFigure />
      </Suspense>
      <FloorGrid />
      <FloatingParticles />
      <EffectComposer>
        <Bloom luminanceThreshold={0.3} intensity={0.8} radius={0.5} mipmapBlur />
      </EffectComposer>
    </>
  )
}

export default function AnatomyViewer() {
  return (
    <div style={{
      position: 'relative', width: '100%', height: '100%', overflow: 'hidden',
      background: 'radial-gradient(ellipse at 40% 30%, #0d1f3c 0%, #050a15 70%)',
    }}>
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: [
          'radial-gradient(ellipse 60% 40% at 20% 80%, rgba(79,195,247,0.04) 0%, transparent 70%)',
          'radial-gradient(ellipse 50% 35% at 80% 20%, rgba(192,132,252,0.04) 0%, transparent 70%)',
        ].join(', '),
      }} />
      <Suspense fallback={
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          color: '#4fc3f7', fontFamily: 'system-ui, sans-serif',
          fontSize: '0.875rem', letterSpacing: '0.1em',
          textTransform: 'uppercase', opacity: 0.7,
        }}>
          Initialising anatomy viewer
        </div>
      }>
        <Canvas
          shadows
          camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 50 }}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
          dpr={[1, 2]}
          frameloop="always"
        >
          <SceneContents />
        </Canvas>
      </Suspense>
      <GLBLoadingOverlay />
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,10,21,0.65) 100%)',
      }} />
    </div>
  )
}
