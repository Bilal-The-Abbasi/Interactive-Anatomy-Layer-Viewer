import React, { Suspense, useRef, useEffect } from 'react'
import { useGLTF, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useAnatomyStore } from '../store/anatomyStore'
import anatomySystems from '../data/anatomySystems'

const MODEL_BASE = '/models/anatomy/'

const SYSTEM_MODEL_MAP = {
  skin:        'skin.glb',
  skeleton:    'skeleton.glb',
  muscles:     'muscles.glb',
  circulatory: 'circulatory.glb',
  nervous:     'nervous.glb',
  respiratory: 'respiratory.glb',
  digestive:   'digestive.glb',
  lymphatic:   'lymphatic.glb',
}

Object.values(SYSTEM_MODEL_MAP).forEach((file) =>
  useGLTF.preload(MODEL_BASE + file)
)

const SYSTEM_COLORS = {
  skin:        new THREE.Color('#d2a07a'),
  skeleton:    new THREE.Color('#e6dcc3'),
  muscles:     new THREE.Color('#c03c3c'),
  circulatory: new THREE.Color('#dc2828'),
  nervous:     new THREE.Color('#dcc850'),
  respiratory: new THREE.Color('#64a0dc'),
  digestive:   new THREE.Color('#b48250'),
  lymphatic:   new THREE.Color('#8cd28c'),
}

const EMISSIVE_COLORS = {
  skin:        new THREE.Color('#ff9060'),
  skeleton:    new THREE.Color('#ffffc0'),
  muscles:     new THREE.Color('#ff6060'),
  circulatory: new THREE.Color('#ff4040'),
  nervous:     new THREE.Color('#ffff40'),
  respiratory: new THREE.Color('#40c0ff'),
  digestive:   new THREE.Color('#ffb060'),
  lymphatic:   new THREE.Color('#40ff80'),
}

function ModelLoadingIndicator({ systemId }) {
  return (
    <Html center>
      <div style={{
        color: 'rgba(100,180,255,0.7)',
        fontSize: '0.65rem',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        fontFamily: 'system-ui, sans-serif',
        whiteSpace: 'nowrap',
        padding: '4px 8px',
        background: 'rgba(5,10,21,0.6)',
        borderRadius: '4px',
        border: '1px solid rgba(100,180,255,0.15)',
      }}>
        Loading {systemId}
      </div>
    </Html>
  )
}

function MissingModelFallback({ systemId }) {
  return (
    <Html center>
      <div style={{
        color: 'rgba(255,160,80,0.7)',
        fontSize: '0.6rem',
        letterSpacing: '0.06em',
        fontFamily: 'system-ui, sans-serif',
        padding: '3px 6px',
        background: 'rgba(40,10,5,0.5)',
        borderRadius: '3px',
        border: '1px solid rgba(255,160,80,0.2)',
      }}>
        {systemId} model unavailable
      </div>
    </Html>
  )
}

function SystemLayer({ systemId, opacity, isActive, isIsolated, anyIsolated }) {
  const groupRef = useRef()
  const { scene } = useGLTF(MODEL_BASE + SYSTEM_MODEL_MAP[systemId])
  const { selectedPart, hoveredPart } = useAnatomyStore()

  const isSelected = selectedPart?.systemId === systemId
  const isHovered  = hoveredPart?.systemId  === systemId

  const effectiveOpacity = isActive
    ? (anyIsolated && !isIsolated ? 0.08 : opacity)
    : 0

  const currentOpacity = useRef(effectiveOpacity)

  useFrame((_, delta) => {
    if (!groupRef.current) return
    const target = effectiveOpacity
    currentOpacity.current = THREE.MathUtils.lerp(
      currentOpacity.current,
      target,
      Math.min(1, delta * 6)
    )
    const op = currentOpacity.current
    groupRef.current.traverse((child) => {
      if (child.isMesh) {
        child.material.opacity = op
        child.material.transparent = true
        child.material.depthWrite = op > 0.95
        child.material.needsUpdate = true
        const emissive = EMISSIVE_COLORS[systemId] || new THREE.Color('#ffffff')
        const intensity = isSelected ? 0.55 : isHovered ? 0.30 : 0
        child.material.emissive = emissive
        child.material.emissiveIntensity = intensity
      }
    })
    groupRef.current.visible = op > 0.005
  })

  useEffect(() => {
    if (!scene) return
    const color = SYSTEM_COLORS[systemId] || new THREE.Color('#aaaaaa')
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone()
        child.material.color = color
        child.material.roughness = 0.65
        child.material.metalness = 0.05
        child.material.transparent = true
        child.material.opacity = 0
        child.material.side = THREE.DoubleSide
        child.castShadow = true
        child.receiveShadow = true
      }
    })
  }, [scene, systemId])

  return (
    <group ref={groupRef} name={'layer-' + systemId}>
      <primitive object={scene} />
    </group>
  )
}

class LayerErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return React.createElement(MissingModelFallback, { systemId: this.props.systemId })
    }
    return this.props.children
  }
}

export default function HumanFigure() {
  const { activeSystems, layerOpacities, isolatedSystem } = useAnatomyStore()
  const anyIsolated = !!isolatedSystem

  return (
    <group name="human-figure" position={[0, -0.2, 0]}>
      {anatomySystems.map((system) => {
        const isActive   = activeSystems[system.id] !== false
        const opacity    = layerOpacities?.[system.id] ?? 1.0
        const isIsolated = isolatedSystem === system.id

        if (!SYSTEM_MODEL_MAP[system.id]) return null

        return (
          React.createElement(LayerErrorBoundary, { key: system.id, systemId: system.id },
            React.createElement(Suspense, { fallback: React.createElement(ModelLoadingIndicator, { systemId: system.id }) },
              React.createElement(SystemLayer, {
                systemId: system.id,
                opacity,
                isActive,
                isIsolated,
                anyIsolated,
              })
            )
          )
        )
      })}
    </group>
  )
}
