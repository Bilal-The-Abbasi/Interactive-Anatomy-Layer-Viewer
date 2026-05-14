/**
 * HumanFigure.jsx
 *
 * Procedurally generated 3-D human figure built from Three.js primitives.
 * The figure is centred at the world origin; Y spans −2 (feet) to +2 (top of
 * head).  Each mesh is interactive: click to select, hover to highlight.
 *
 * Eight anatomical system layers:
 *   skeletal | muscular | circulatory | respiratory |
 *   digestive | nervous  | lymphatic   | skin
 */

import React, { useMemo } from 'react'
import { useAnatomyStore } from '../store/anatomyStore'
import { ANATOMY_PARTS } from '../data/anatomySystems'

// ─── Helper: look up a part by id ─────────────────────────────────────────────
function usePart(partId) {
  return useMemo(
    () => ANATOMY_PARTS.find((p) => p.id === partId) ?? { id: partId, name: partId },
    [partId]
  )
}

// ─── Shared interaction handler factory ───────────────────────────────────────
function usePartHandlers(partId, setHoveredPart, setSelectedPart) {
  const part = usePart(partId)
  return {
    onPointerOver: (e) => { e.stopPropagation(); setHoveredPart(part) },
    onPointerOut:  ()  => { setHoveredPart(null) },
    onClick:       (e) => { e.stopPropagation(); setSelectedPart(part) },
  }
}

// ─── AnatomyMesh ──────────────────────────────────────────────────────────────
/**
 * A single selectable mesh.
 *
 * Props
 *   partId          – matches an id in ANATOMY_PARTS
 *   position        – [x, y, z]
 *   scale           – number | [x, y, z]  (default 1)
 *   rotation        – [x, y, z]           (default [0,0,0])
 *   color           – base hex colour
 *   emissiveColor   – emissive hex colour for hover/select
 *   baseOpacity     – resting opacity (overridden when system is inactive → 0)
 *   isActive        – whether the parent system is active
 *   selectedPart    – store selected part
 *   hoveredPart     – store hovered part
 *   setHoveredPart  – store action
 *   setSelectedPart – store action
 *   children        – geometry JSX
 */
function AnatomyMesh({
  partId,
  position,
  scale,
  rotation,
  color,
  emissiveColor,
  baseOpacity,
  isActive,
  selectedPart,
  hoveredPart,
  setHoveredPart,
  setSelectedPart,
  children,
}) {
  const part = usePart(partId)
  const isSelected = selectedPart?.id === partId
  const isHovered  = hoveredPart?.id  === partId

  const handlers = {
    onPointerOver: (e) => { e.stopPropagation(); setHoveredPart(part) },
    onPointerOut:  ()  => { setHoveredPart(null) },
    onClick:       (e) => { e.stopPropagation(); setSelectedPart(part) },
  }

  const opacity = isActive ? baseOpacity : 0
  const emissiveIntensity = isSelected ? 0.8 : isHovered ? 0.5 : 0

  return (
    <mesh
      name={partId}
      position={position}
      scale={scale}
      rotation={rotation}
      {...handlers}
    >
      {children}
      <meshStandardMaterial
        color={color}
        emissive={isHovered || isSelected ? emissiveColor : '#000000'}
        emissiveIntensity={emissiveIntensity}
        opacity={opacity}
        transparent={true}
        roughness={0.6}
        metalness={0.1}
        depthWrite={opacity > 0.98}
      />
    </mesh>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// SKELETAL LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function SkeletalLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  const meshProps = { color, emissiveColor, baseOpacity: opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  // 6 vertebrae – each is a tiny rounded box
  const vertebrae = [-0.05, 0.15, 0.35, 0.55, 0.75, 0.95, 1.1].map((yOff, i) => (
    <AnatomyMesh key={`vert_${i}`} partId="spine" position={[0, 1.3 - yOff, -0.05]} {...meshProps}>
      <boxGeometry args={[0.12, 0.1, 0.1]} />
    </AnatomyMesh>
  ))

  // 5 ribs per side using flat tori arcs
  const leftRibs  = [0, 1, 2, 3, 4].map((i) => (
    <AnatomyMesh key={`lrib_${i}`} partId="ribcage"
      position={[-0.01, 1.0 - i * 0.12, 0]}
      rotation={[0, 0, Math.PI / 2]}
      scale={[1 - i * 0.04, 0.55 + i * 0.02, 0.25]}
      {...meshProps}
    >
      <torusGeometry args={[0.28, 0.025, 6, 12, Math.PI]} />
    </AnatomyMesh>
  ))

  const rightRibs = [0, 1, 2, 3, 4].map((i) => (
    <AnatomyMesh key={`rrib_${i}`} partId="ribcage"
      position={[0.01, 1.0 - i * 0.12, 0]}
      rotation={[0, 0, -Math.PI / 2]}
      scale={[1 - i * 0.04, 0.55 + i * 0.02, 0.25]}
      {...meshProps}
    >
      <torusGeometry args={[0.28, 0.025, 6, 12, Math.PI]} />
    </AnatomyMesh>
  ))

  return (
    <group name="skeletal-layer">
      {/* Skull */}
      <AnatomyMesh partId="skull" position={[0, 1.75, 0]} {...meshProps}>
        <sphereGeometry args={[0.32, 12, 8]} />
      </AnatomyMesh>

      {/* Spine vertebrae */}
      {vertebrae}

      {/* Ribcage */}
      {leftRibs}
      {rightRibs}

      {/* Pelvis */}
      <AnatomyMesh partId="pelvis" position={[0, -0.25, 0]} scale={[0.7, 0.22, 0.5]} {...meshProps}>
        <boxGeometry args={[1, 1, 1]} />
      </AnatomyMesh>

      {/* Left Humerus */}
      <AnatomyMesh partId="humerus" position={[-0.65, 0.8, 0]} rotation={[0, 0, Math.PI / 12]} {...meshProps}>
        <cylinderGeometry args={[0.05, 0.055, 0.7, 8]} />
      </AnatomyMesh>

      {/* Right Humerus */}
      <AnatomyMesh partId="humerus" position={[0.65, 0.8, 0]} rotation={[0, 0, -Math.PI / 12]} {...meshProps}>
        <cylinderGeometry args={[0.05, 0.055, 0.7, 8]} />
      </AnatomyMesh>

      {/* Left Radius/Ulna */}
      <AnatomyMesh partId="spine" position={[-0.82, 0.3, 0]} rotation={[0, 0, Math.PI / 8]} {...meshProps}>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 8]} />
      </AnatomyMesh>

      {/* Right Radius/Ulna */}
      <AnatomyMesh partId="spine" position={[0.82, 0.3, 0]} rotation={[0, 0, -Math.PI / 8]} {...meshProps}>
        <cylinderGeometry args={[0.04, 0.04, 0.5, 8]} />
      </AnatomyMesh>

      {/* Left Femur */}
      <AnatomyMesh partId="femur" position={[-0.22, -0.7, 0]} {...meshProps}>
        <cylinderGeometry args={[0.065, 0.07, 0.9, 8]} />
      </AnatomyMesh>

      {/* Right Femur */}
      <AnatomyMesh partId="femur" position={[0.22, -0.7, 0]} {...meshProps}>
        <cylinderGeometry args={[0.065, 0.07, 0.9, 8]} />
      </AnatomyMesh>

      {/* Left Tibia */}
      <AnatomyMesh partId="tibia" position={[-0.22, -1.45, 0]} {...meshProps}>
        <cylinderGeometry args={[0.05, 0.045, 0.7, 8]} />
      </AnatomyMesh>

      {/* Right Tibia */}
      <AnatomyMesh partId="tibia" position={[0.22, -1.45, 0]} {...meshProps}>
        <cylinderGeometry args={[0.05, 0.045, 0.7, 8]} />
      </AnatomyMesh>

      {/* Left Clavicle */}
      <AnatomyMesh partId="skull" position={[-0.33, 1.2, 0]} rotation={[0, 0, Math.PI / 5]} {...meshProps}>
        <boxGeometry args={[0.34, 0.04, 0.04]} />
      </AnatomyMesh>

      {/* Right Clavicle */}
      <AnatomyMesh partId="skull" position={[0.33, 1.2, 0]} rotation={[0, 0, -Math.PI / 5]} {...meshProps}>
        <boxGeometry args={[0.34, 0.04, 0.04]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// MUSCULAR LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function MuscularLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  const meshProps = { color, emissiveColor, baseOpacity: opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  // 3 rows of abdominal blocks
  const absRows = [-0.05, 0.2, 0.45].map((yOff, rowIdx) =>
    [-0.12, 0.12].map((xOff, colIdx) => (
      <AnatomyMesh key={`abs_${rowIdx}_${colIdx}`} partId="biceps"
        position={[xOff, 0.55 - yOff, 0.22]}
        scale={[0.12, 0.1, 0.06]}
        {...meshProps}
      >
        <boxGeometry args={[1, 1, 1]} />
      </AnatomyMesh>
    ))
  )

  return (
    <group name="muscular-layer">
      {/* Left Biceps */}
      <AnatomyMesh partId="biceps" position={[-0.65, 0.75, 0.08]} {...meshProps}>
        <capsuleGeometry args={[0.1, 0.5, 4, 8]} />
      </AnatomyMesh>

      {/* Right Biceps */}
      <AnatomyMesh partId="biceps" position={[0.65, 0.75, 0.08]} {...meshProps}>
        <capsuleGeometry args={[0.1, 0.5, 4, 8]} />
      </AnatomyMesh>

      {/* Left Triceps */}
      <AnatomyMesh partId="biceps" position={[-0.65, 0.75, -0.08]} {...meshProps}>
        <capsuleGeometry args={[0.09, 0.5, 4, 8]} />
      </AnatomyMesh>

      {/* Right Triceps */}
      <AnatomyMesh partId="biceps" position={[0.65, 0.75, -0.08]} {...meshProps}>
        <capsuleGeometry args={[0.09, 0.5, 4, 8]} />
      </AnatomyMesh>

      {/* Left Deltoid */}
      <AnatomyMesh partId="deltoid" position={[-0.65, 1.15, 0]} scale={[0.18, 0.15, 0.15]} {...meshProps}>
        <sphereGeometry args={[1, 8, 6]} />
      </AnatomyMesh>

      {/* Right Deltoid */}
      <AnatomyMesh partId="deltoid" position={[0.65, 1.15, 0]} scale={[0.18, 0.15, 0.15]} {...meshProps}>
        <sphereGeometry args={[1, 8, 6]} />
      </AnatomyMesh>

      {/* Left Quadriceps */}
      <AnatomyMesh partId="quadriceps" position={[-0.22, -0.65, 0.08]} {...meshProps}>
        <capsuleGeometry args={[0.14, 0.7, 4, 8]} />
      </AnatomyMesh>

      {/* Right Quadriceps */}
      <AnatomyMesh partId="quadriceps" position={[0.22, -0.65, 0.08]} {...meshProps}>
        <capsuleGeometry args={[0.14, 0.7, 4, 8]} />
      </AnatomyMesh>

      {/* Left Hamstrings */}
      <AnatomyMesh partId="quadriceps" position={[-0.22, -0.65, -0.08]} {...meshProps}>
        <capsuleGeometry args={[0.12, 0.7, 4, 8]} />
      </AnatomyMesh>

      {/* Right Hamstrings */}
      <AnatomyMesh partId="quadriceps" position={[0.22, -0.65, -0.08]} {...meshProps}>
        <capsuleGeometry args={[0.12, 0.7, 4, 8]} />
      </AnatomyMesh>

      {/* Left Gastrocnemius */}
      <AnatomyMesh partId="quadriceps" position={[-0.22, -1.4, -0.04]} {...meshProps}>
        <capsuleGeometry args={[0.1, 0.5, 4, 8]} />
      </AnatomyMesh>

      {/* Right Gastrocnemius */}
      <AnatomyMesh partId="quadriceps" position={[0.22, -1.4, -0.04]} {...meshProps}>
        <capsuleGeometry args={[0.1, 0.5, 4, 8]} />
      </AnatomyMesh>

      {/* Left Pectoral */}
      <AnatomyMesh partId="biceps" position={[-0.2, 0.75, 0.2]} scale={[0.3, 0.3, 0.08]} {...meshProps}>
        <boxGeometry args={[1, 1, 1]} />
      </AnatomyMesh>

      {/* Right Pectoral */}
      <AnatomyMesh partId="biceps" position={[0.2, 0.75, 0.2]} scale={[0.3, 0.3, 0.08]} {...meshProps}>
        <boxGeometry args={[1, 1, 1]} />
      </AnatomyMesh>

      {/* Abdominals */}
      {absRows}

      {/* Trapezius */}
      <AnatomyMesh partId="deltoid" position={[0, 1.0, -0.15]} scale={[0.6, 0.25, 0.08]} {...meshProps}>
        <boxGeometry args={[1, 1, 1]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// CIRCULATORY LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function CirculatoryLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  const meshProps = { color, emissiveColor, baseOpacity: opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  return (
    <group name="circulatory-layer">
      {/* Heart – two overlapping spheres */}
      <AnatomyMesh partId="heart" position={[0.08, 0.5, 0.1]} scale={[1.1, 1.0, 0.9]} {...meshProps}>
        <sphereGeometry args={[0.12, 10, 8]} />
      </AnatomyMesh>
      <AnatomyMesh partId="heart" position={[-0.04, 0.46, 0.08]} scale={[1.0, 1.1, 0.9]} {...meshProps}>
        <sphereGeometry args={[0.1, 10, 8]} />
      </AnatomyMesh>

      {/* Aorta */}
      <AnatomyMesh partId="aorta" position={[0, 0.75, 0.05]} {...meshProps}>
        <cylinderGeometry args={[0.04, 0.045, 0.5, 8]} />
      </AnatomyMesh>

      {/* Aortic arch */}
      <AnatomyMesh partId="aorta" position={[0, 0.98, 0.02]} rotation={[0, 0, Math.PI / 2]} scale={[0.8, 1.0, 0.5]} {...meshProps}>
        <torusGeometry args={[0.12, 0.03, 6, 12, Math.PI]} />
      </AnatomyMesh>

      {/* Left Common Carotid */}
      <AnatomyMesh partId="aorta" position={[-0.06, 1.08, 0.04]} {...meshProps}>
        <cylinderGeometry args={[0.025, 0.025, 0.35, 6]} />
      </AnatomyMesh>

      {/* Right Common Carotid */}
      <AnatomyMesh partId="aorta" position={[0.06, 1.08, 0.04]} {...meshProps}>
        <cylinderGeometry args={[0.025, 0.025, 0.35, 6]} />
      </AnatomyMesh>

      {/* Left Subclavian */}
      <AnatomyMesh partId="veins" position={[-0.35, 1.1, 0]} rotation={[0, 0, Math.PI / 4]} {...meshProps}>
        <cylinderGeometry args={[0.022, 0.022, 0.45, 6]} />
      </AnatomyMesh>

      {/* Right Subclavian */}
      <AnatomyMesh partId="veins" position={[0.35, 1.1, 0]} rotation={[0, 0, -Math.PI / 4]} {...meshProps}>
        <cylinderGeometry args={[0.022, 0.022, 0.45, 6]} />
      </AnatomyMesh>

      {/* Left brachial artery */}
      <AnatomyMesh partId="veins" position={[-0.62, 0.7, 0]} {...meshProps}>
        <cylinderGeometry args={[0.018, 0.018, 0.7, 6]} />
      </AnatomyMesh>

      {/* Right brachial artery */}
      <AnatomyMesh partId="veins" position={[0.62, 0.7, 0]} {...meshProps}>
        <cylinderGeometry args={[0.018, 0.018, 0.7, 6]} />
      </AnatomyMesh>

      {/* Descending Aorta */}
      <AnatomyMesh partId="aorta" position={[0, 0.2, -0.05]} {...meshProps}>
        <cylinderGeometry args={[0.03, 0.03, 0.75, 8]} />
      </AnatomyMesh>

      {/* Left Iliac */}
      <AnatomyMesh partId="veins" position={[-0.15, -0.4, 0]} rotation={[0, 0, Math.PI / 10]} {...meshProps}>
        <cylinderGeometry args={[0.025, 0.022, 0.45, 6]} />
      </AnatomyMesh>

      {/* Right Iliac */}
      <AnatomyMesh partId="veins" position={[0.15, -0.4, 0]} rotation={[0, 0, -Math.PI / 10]} {...meshProps}>
        <cylinderGeometry args={[0.025, 0.022, 0.45, 6]} />
      </AnatomyMesh>

      {/* Left Femoral Artery */}
      <AnatomyMesh partId="veins" position={[-0.22, -0.92, 0]} {...meshProps}>
        <cylinderGeometry args={[0.018, 0.018, 0.75, 6]} />
      </AnatomyMesh>

      {/* Right Femoral Artery */}
      <AnatomyMesh partId="veins" position={[0.22, -0.92, 0]} {...meshProps}>
        <cylinderGeometry args={[0.018, 0.018, 0.75, 6]} />
      </AnatomyMesh>

      {/* Left Popliteal / Tibial */}
      <AnatomyMesh partId="veins" position={[-0.22, -1.48, 0]} {...meshProps}>
        <cylinderGeometry args={[0.014, 0.014, 0.6, 6]} />
      </AnatomyMesh>

      {/* Right Popliteal / Tibial */}
      <AnatomyMesh partId="veins" position={[0.22, -1.48, 0]} {...meshProps}>
        <cylinderGeometry args={[0.014, 0.014, 0.6, 6]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// RESPIRATORY LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function RespiratoryLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  const meshProps = { color, emissiveColor, baseOpacity: opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  return (
    <group name="respiratory-layer">
      {/* Trachea */}
      <AnatomyMesh partId="trachea" position={[0, 0.95, 0.05]} {...meshProps}>
        <cylinderGeometry args={[0.05, 0.05, 0.4, 8]} />
      </AnatomyMesh>

      {/* Left Bronchus */}
      <AnatomyMesh partId="trachea" position={[-0.12, 0.7, 0.04]} rotation={[0, 0, Math.PI / 6]} {...meshProps}>
        <cylinderGeometry args={[0.03, 0.03, 0.22, 6]} />
      </AnatomyMesh>

      {/* Right Bronchus */}
      <AnatomyMesh partId="trachea" position={[0.12, 0.7, 0.04]} rotation={[0, 0, -Math.PI / 6]} {...meshProps}>
        <cylinderGeometry args={[0.03, 0.03, 0.22, 6]} />
      </AnatomyMesh>

      {/* Left Lung */}
      <AnatomyMesh partId="left_lung" position={[-0.25, 0.55, 0]} scale={[0.28, 0.55, 0.2]} {...meshProps}>
        <sphereGeometry args={[1, 12, 10]} />
      </AnatomyMesh>

      {/* Right Lung */}
      <AnatomyMesh partId="right_lung" position={[0.25, 0.55, 0]} scale={[0.28, 0.55, 0.2]} {...meshProps}>
        <sphereGeometry args={[1, 12, 10]} />
      </AnatomyMesh>

      {/* Left secondary bronchi – upper lobe */}
      <AnatomyMesh partId="trachea" position={[-0.2, 0.82, 0.03]} rotation={[0, 0, Math.PI / 3]} {...meshProps}>
        <cylinderGeometry args={[0.018, 0.018, 0.14, 5]} />
      </AnatomyMesh>

      {/* Right secondary bronchi – upper lobe */}
      <AnatomyMesh partId="trachea" position={[0.2, 0.82, 0.03]} rotation={[0, 0, -Math.PI / 3]} {...meshProps}>
        <cylinderGeometry args={[0.018, 0.018, 0.14, 5]} />
      </AnatomyMesh>

      {/* Diaphragm – thin disc */}
      <AnatomyMesh partId="trachea" position={[0, 0.12, 0]} rotation={[0, 0, 0]} scale={[1, 0.04, 0.7]} {...meshProps}>
        <cylinderGeometry args={[0.44, 0.44, 1, 16]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// DIGESTIVE LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function DigestiveLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  const meshProps = { color, emissiveColor, baseOpacity: opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  return (
    <group name="digestive-layer">
      {/* Esophagus */}
      <AnatomyMesh partId="stomach" position={[0.02, 0.85, 0]} {...meshProps}>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 6]} />
      </AnatomyMesh>

      {/* Stomach */}
      <AnatomyMesh partId="stomach" position={[-0.15, 0.3, 0.05]} scale={[0.22, 0.18, 0.15]} {...meshProps}>
        <sphereGeometry args={[1, 10, 8]} />
      </AnatomyMesh>

      {/* Liver */}
      <AnatomyMesh partId="liver" position={[0.2, 0.35, 0.05]} scale={[0.3, 0.2, 0.15]} {...meshProps}>
        <sphereGeometry args={[1, 10, 8]} />
      </AnatomyMesh>

      {/* Gallbladder */}
      <AnatomyMesh partId="liver" position={[0.28, 0.22, 0.06]} scale={[0.06, 0.08, 0.06]} {...meshProps}>
        <sphereGeometry args={[1, 8, 6]} />
      </AnatomyMesh>

      {/* Small Intestine – coiled torus */}
      <AnatomyMesh partId="small_intestine" position={[0, -0.1, 0.05]} scale={[1, 0.55, 0.75]} {...meshProps}>
        <torusGeometry args={[0.22, 0.04, 6, 20]} />
      </AnatomyMesh>
      <AnatomyMesh partId="small_intestine" position={[0.02, -0.08, 0.05]} scale={[0.7, 0.4, 0.65]} {...meshProps}>
        <torusGeometry args={[0.18, 0.035, 6, 16]} />
      </AnatomyMesh>

      {/* Large Intestine – outer frame */}
      <AnatomyMesh partId="large_intestine" position={[0, -0.2, 0.04]} scale={[1, 0.65, 0.8]} {...meshProps}>
        <torusGeometry args={[0.35, 0.05, 6, 18]} />
      </AnatomyMesh>

      {/* Left Kidney */}
      <AnatomyMesh partId="kidneys" position={[-0.3, 0.1, -0.1]} scale={[0.1, 0.14, 0.09]} {...meshProps}>
        <sphereGeometry args={[1, 10, 8]} />
      </AnatomyMesh>

      {/* Right Kidney */}
      <AnatomyMesh partId="kidneys" position={[0.3, 0.1, -0.1]} scale={[0.1, 0.14, 0.09]} {...meshProps}>
        <sphereGeometry args={[1, 10, 8]} />
      </AnatomyMesh>

      {/* Pancreas */}
      <AnatomyMesh partId="liver" position={[-0.05, 0.18, 0.0]} scale={[0.18, 0.06, 0.07]} {...meshProps}>
        <capsuleGeometry args={[1, 1, 4, 8]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// NERVOUS LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function NervousLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  const meshProps = { color, emissiveColor, baseOpacity: opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  return (
    <group name="nervous-layer">
      {/* Brain – cerebrum */}
      <AnatomyMesh partId="brain" position={[0, 1.75, 0]} scale={[1.05, 1.0, 1.0]} {...meshProps}>
        <sphereGeometry args={[0.28, 14, 10]} />
      </AnatomyMesh>

      {/* Cerebellum */}
      <AnatomyMesh partId="brain" position={[0, 1.6, -0.15]} scale={[1.1, 0.9, 0.9]} {...meshProps}>
        <sphereGeometry args={[0.12, 10, 8]} />
      </AnatomyMesh>

      {/* Brainstem */}
      <AnatomyMesh partId="spinal_cord" position={[0, 1.44, -0.05]} {...meshProps}>
        <cylinderGeometry args={[0.04, 0.04, 0.14, 6]} />
      </AnatomyMesh>

      {/* Spinal Cord */}
      <AnatomyMesh partId="spinal_cord" position={[0, 0.5, -0.04]} {...meshProps}>
        <cylinderGeometry args={[0.03, 0.03, 1.4, 6]} />
      </AnatomyMesh>

      {/* Left Brachial Plexus cluster */}
      <AnatomyMesh partId="spinal_cord" position={[-0.42, 1.08, 0]} scale={[0.06, 0.08, 0.06]} {...meshProps}>
        <sphereGeometry args={[1, 6, 5]} />
      </AnatomyMesh>
      <AnatomyMesh partId="spinal_cord" position={[-0.48, 1.02, 0]} rotation={[0, 0, Math.PI / 4]} {...meshProps}>
        <cylinderGeometry args={[0.012, 0.012, 0.2, 5]} />
      </AnatomyMesh>

      {/* Right Brachial Plexus cluster */}
      <AnatomyMesh partId="spinal_cord" position={[0.42, 1.08, 0]} scale={[0.06, 0.08, 0.06]} {...meshProps}>
        <sphereGeometry args={[1, 6, 5]} />
      </AnatomyMesh>
      <AnatomyMesh partId="spinal_cord" position={[0.48, 1.02, 0]} rotation={[0, 0, -Math.PI / 4]} {...meshProps}>
        <cylinderGeometry args={[0.012, 0.012, 0.2, 5]} />
      </AnatomyMesh>

      {/* Left Sciatic Nerve */}
      <AnatomyMesh partId="spinal_cord" position={[-0.22, -0.9, -0.06]} {...meshProps}>
        <cylinderGeometry args={[0.015, 0.015, 0.75, 5]} />
      </AnatomyMesh>

      {/* Right Sciatic Nerve */}
      <AnatomyMesh partId="spinal_cord" position={[0.22, -0.9, -0.06]} {...meshProps}>
        <cylinderGeometry args={[0.015, 0.015, 0.75, 5]} />
      </AnatomyMesh>

      {/* Left lower-leg nerves */}
      <AnatomyMesh partId="spinal_cord" position={[-0.22, -1.5, -0.04]} {...meshProps}>
        <cylinderGeometry args={[0.012, 0.012, 0.6, 5]} />
      </AnatomyMesh>

      {/* Right lower-leg nerves */}
      <AnatomyMesh partId="spinal_cord" position={[0.22, -1.5, -0.04]} {...meshProps}>
        <cylinderGeometry args={[0.012, 0.012, 0.6, 5]} />
      </AnatomyMesh>

      {/* Left radial nerve */}
      <AnatomyMesh partId="spinal_cord" position={[-0.7, 0.75, 0]} {...meshProps}>
        <cylinderGeometry args={[0.01, 0.01, 0.65, 5]} />
      </AnatomyMesh>

      {/* Right radial nerve */}
      <AnatomyMesh partId="spinal_cord" position={[0.7, 0.75, 0]} {...meshProps}>
        <cylinderGeometry args={[0.01, 0.01, 0.65, 5]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// LYMPHATIC LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function LymphaticLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  const meshProps = { color, emissiveColor, baseOpacity: opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  // Cervical lymph node cluster
  const cervicalNodes = [
    [-0.1, 1.27, 0.06],
    [0.1,  1.27, 0.06],
    [-0.12, 1.18, 0.08],
    [0.12,  1.18, 0.08],
  ].map(([x, y, z], i) => (
    <AnatomyMesh key={`cerv_${i}`} partId="lymph_nodes" position={[x, y, z]} scale={[0.04, 0.04, 0.04]} {...meshProps}>
      <sphereGeometry args={[1, 6, 5]} />
    </AnatomyMesh>
  ))

  // Axillary node clusters
  const leftAxillaryNodes = [
    [-0.52, 0.92, 0.04],
    [-0.56, 0.88, 0.0],
    [-0.5,  0.84, 0.06],
  ].map(([x, y, z], i) => (
    <AnatomyMesh key={`lax_${i}`} partId="lymph_nodes" position={[x, y, z]} scale={[0.04, 0.04, 0.04]} {...meshProps}>
      <sphereGeometry args={[1, 6, 5]} />
    </AnatomyMesh>
  ))

  const rightAxillaryNodes = [
    [0.52, 0.92, 0.04],
    [0.56, 0.88, 0.0],
    [0.5,  0.84, 0.06],
  ].map(([x, y, z], i) => (
    <AnatomyMesh key={`rax_${i}`} partId="lymph_nodes" position={[x, y, z]} scale={[0.04, 0.04, 0.04]} {...meshProps}>
      <sphereGeometry args={[1, 6, 5]} />
    </AnatomyMesh>
  ))

  return (
    <group name="lymphatic-layer">
      {/* Thymus */}
      <AnatomyMesh partId="thymus" position={[0, 0.85, 0.08]} scale={[0.15, 0.12, 0.08]} {...meshProps}>
        <boxGeometry args={[1, 1, 1]} />
      </AnatomyMesh>

      {/* Spleen */}
      <AnatomyMesh partId="thymus" position={[-0.35, 0.25, 0]} scale={[0.12, 0.15, 0.1]} {...meshProps}>
        <sphereGeometry args={[1, 8, 6]} />
      </AnatomyMesh>

      {/* Cervical Lymph Nodes */}
      {cervicalNodes}

      {/* Left Axillary Nodes */}
      {leftAxillaryNodes}

      {/* Right Axillary Nodes */}
      {rightAxillaryNodes}

      {/* Thoracic Duct – main lymph vessel up the left side of spine */}
      <AnatomyMesh partId="lymph_nodes" position={[-0.05, 0.35, -0.03]} {...meshProps}>
        <cylinderGeometry args={[0.012, 0.012, 1.0, 5]} />
      </AnatomyMesh>

      {/* Left inguinal nodes */}
      <AnatomyMesh partId="lymph_nodes" position={[-0.2, -0.55, 0.08]} scale={[0.04, 0.04, 0.04]} {...meshProps}>
        <sphereGeometry args={[1, 6, 5]} />
      </AnatomyMesh>
      <AnatomyMesh partId="lymph_nodes" position={[-0.16, -0.6, 0.06]} scale={[0.04, 0.04, 0.04]} {...meshProps}>
        <sphereGeometry args={[1, 6, 5]} />
      </AnatomyMesh>

      {/* Right inguinal nodes */}
      <AnatomyMesh partId="lymph_nodes" position={[0.2, -0.55, 0.08]} scale={[0.04, 0.04, 0.04]} {...meshProps}>
        <sphereGeometry args={[1, 6, 5]} />
      </AnatomyMesh>
      <AnatomyMesh partId="lymph_nodes" position={[0.16, -0.6, 0.06]} scale={[0.04, 0.04, 0.04]} {...meshProps}>
        <sphereGeometry args={[1, 6, 5]} />
      </AnatomyMesh>

      {/* Abdominal lymph vessel */}
      <AnatomyMesh partId="lymph_nodes" position={[0, -0.1, 0.0]} {...meshProps}>
        <cylinderGeometry args={[0.01, 0.01, 0.6, 5]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// SKIN LAYER
// ═══════════════════════════════════════════════════════════════════════════════
function SkinLayer({ color, emissiveColor, opacity, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }) {
  // Skin always uses its own base opacity (0.35) regardless of store layer opacity
  const SKIN_OPACITY = 0.35
  const meshProps = { color, emissiveColor, baseOpacity: SKIN_OPACITY, isActive, selectedPart, hoveredPart, setHoveredPart, setSelectedPart }

  return (
    <group name="skin-layer">
      {/* Head */}
      <AnatomyMesh partId="skin_layer" position={[0, 1.75, 0]} {...meshProps}>
        <sphereGeometry args={[0.36, 14, 10]} />
      </AnatomyMesh>

      {/* Neck */}
      <AnatomyMesh partId="skin_layer" position={[0, 1.35, 0]} {...meshProps}>
        <cylinderGeometry args={[0.14, 0.15, 0.3, 10]} />
      </AnatomyMesh>

      {/* Torso */}
      <AnatomyMesh partId="skin_layer" position={[0, 0.55, 0]} {...meshProps}>
        <capsuleGeometry args={[0.42, 1.0, 8, 16]} />
      </AnatomyMesh>

      {/* Left Upper Arm */}
      <AnatomyMesh partId="skin_layer" position={[-0.68, 0.78, 0]} rotation={[0, 0, Math.PI / 14]} {...meshProps}>
        <capsuleGeometry args={[0.12, 0.55, 6, 10]} />
      </AnatomyMesh>

      {/* Right Upper Arm */}
      <AnatomyMesh partId="skin_layer" position={[0.68, 0.78, 0]} rotation={[0, 0, -Math.PI / 14]} {...meshProps}>
        <capsuleGeometry args={[0.12, 0.55, 6, 10]} />
      </AnatomyMesh>

      {/* Left Lower Arm */}
      <AnatomyMesh partId="skin_layer" position={[-0.85, 0.25, 0]} rotation={[0, 0, Math.PI / 10]} {...meshProps}>
        <capsuleGeometry args={[0.1, 0.45, 6, 10]} />
      </AnatomyMesh>

      {/* Right Lower Arm */}
      <AnatomyMesh partId="skin_layer" position={[0.85, 0.25, 0]} rotation={[0, 0, -Math.PI / 10]} {...meshProps}>
        <capsuleGeometry args={[0.1, 0.45, 6, 10]} />
      </AnatomyMesh>

      {/* Left Hand */}
      <AnatomyMesh partId="skin_layer" position={[-0.9, -0.05, 0]} scale={[1.1, 0.85, 0.55]} {...meshProps}>
        <sphereGeometry args={[0.1, 8, 6]} />
      </AnatomyMesh>

      {/* Right Hand */}
      <AnatomyMesh partId="skin_layer" position={[0.9, -0.05, 0]} scale={[1.1, 0.85, 0.55]} {...meshProps}>
        <sphereGeometry args={[0.1, 8, 6]} />
      </AnatomyMesh>

      {/* Left Upper Leg */}
      <AnatomyMesh partId="skin_layer" position={[-0.24, -0.65, 0]} {...meshProps}>
        <capsuleGeometry args={[0.17, 0.7, 6, 10]} />
      </AnatomyMesh>

      {/* Right Upper Leg */}
      <AnatomyMesh partId="skin_layer" position={[0.24, -0.65, 0]} {...meshProps}>
        <capsuleGeometry args={[0.17, 0.7, 6, 10]} />
      </AnatomyMesh>

      {/* Left Lower Leg */}
      <AnatomyMesh partId="skin_layer" position={[-0.24, -1.4, 0]} {...meshProps}>
        <capsuleGeometry args={[0.13, 0.65, 6, 10]} />
      </AnatomyMesh>

      {/* Right Lower Leg */}
      <AnatomyMesh partId="skin_layer" position={[0.24, -1.4, 0]} {...meshProps}>
        <capsuleGeometry args={[0.13, 0.65, 6, 10]} />
      </AnatomyMesh>

      {/* Left Foot */}
      <AnatomyMesh partId="skin_layer" position={[-0.24, -1.9, 0.05]} scale={[0.12, 0.08, 0.2]} {...meshProps}>
        <sphereGeometry args={[1, 8, 6]} />
      </AnatomyMesh>

      {/* Right Foot */}
      <AnatomyMesh partId="skin_layer" position={[0.24, -1.9, 0.05]} scale={[0.12, 0.08, 0.2]} {...meshProps}>
        <sphereGeometry args={[1, 8, 6]} />
      </AnatomyMesh>
    </group>
  )
}

// ═══════════════════════════════════════════════════════════════════════════════
// HUMAN FIGURE – main export
// ═══════════════════════════════════════════════════════════════════════════════
export default function HumanFigure() {
  const {
    activeSystems,
    layerOpacities,
    selectedPart,
    hoveredPart,
    setSelectedPart,
    setHoveredPart,
  } = useAnatomyStore()

  // Common props threaded into each layer
  const commonLayerProps = { selectedPart, hoveredPart, setSelectedPart, setHoveredPart }

  return (
    <group name="human-figure">
      {/* ── Skin (outermost, rendered first so depth sorting works) ──────────── */}
      <group visible={activeSystems.skin}>
        <SkinLayer
          color="#d4a899"
          emissiveColor="#f0cfc3"
          opacity={layerOpacities.skin ?? 0.35}
          isActive={activeSystems.skin}
          {...commonLayerProps}
        />
      </group>

      {/* ── Skeletal ─────────────────────────────────────────────────────────── */}
      <group visible={activeSystems.skeletal}>
        <SkeletalLayer
          color="#e8e4d0"
          emissiveColor="#f5f0dc"
          opacity={layerOpacities.skeletal ?? 1.0}
          isActive={activeSystems.skeletal}
          {...commonLayerProps}
        />
      </group>

      {/* ── Muscular ─────────────────────────────────────────────────────────── */}
      <group visible={activeSystems.muscular}>
        <MuscularLayer
          color="#c0392b"
          emissiveColor="#e74c3c"
          opacity={layerOpacities.muscular ?? 0.9}
          isActive={activeSystems.muscular}
          {...commonLayerProps}
        />
      </group>

      {/* ── Digestive ────────────────────────────────────────────────────────── */}
      <group visible={activeSystems.digestive}>
        <DigestiveLayer
          color="#ff8f00"
          emissiveColor="#ffb300"
          opacity={layerOpacities.digestive ?? 0.85}
          isActive={activeSystems.digestive}
          {...commonLayerProps}
        />
      </group>

      {/* ── Respiratory ──────────────────────────────────────────────────────── */}
      <group visible={activeSystems.respiratory}>
        <RespiratoryLayer
          color="#81d4fa"
          emissiveColor="#b3e5fc"
          opacity={layerOpacities.respiratory ?? 0.8}
          isActive={activeSystems.respiratory}
          {...commonLayerProps}
        />
      </group>

      {/* ── Circulatory ──────────────────────────────────────────────────────── */}
      <group visible={activeSystems.circulatory}>
        <CirculatoryLayer
          color="#e53935"
          emissiveColor="#ff5252"
          opacity={layerOpacities.circulatory ?? 0.85}
          isActive={activeSystems.circulatory}
          {...commonLayerProps}
        />
      </group>

      {/* ── Lymphatic ────────────────────────────────────────────────────────── */}
      <group visible={activeSystems.lymphatic}>
        <LymphaticLayer
          color="#66bb6a"
          emissiveColor="#a5d6a7"
          opacity={layerOpacities.lymphatic ?? 0.8}
          isActive={activeSystems.lymphatic}
          {...commonLayerProps}
        />
      </group>

      {/* ── Nervous ──────────────────────────────────────────────────────────── */}
      <group visible={activeSystems.nervous}>
        <NervousLayer
          color="#4fc3f7"
          emissiveColor="#80d8ff"
          opacity={layerOpacities.nervous ?? 0.9}
          isActive={activeSystems.nervous}
          {...commonLayerProps}
        />
      </group>
    </group>
  )
}
