import React, { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useAnatomyStore } from '../store/anatomyStore'

/**
 * Target camera positions for each named view mode.
 */
const VIEW_POSITIONS = {
  front: new THREE.Vector3(0, 0, 5),
  side:  new THREE.Vector3(5, 0, 0),
  rear:  new THREE.Vector3(0, 0, -5),
  free:  null, // no override – OrbitControls is fully unlocked
}

const VIEW_TARGETS = {
  front: new THREE.Vector3(0, 0, 0),
  side:  new THREE.Vector3(0, 0, 0),
  rear:  new THREE.Vector3(0, 0, 0),
  free:  null,
}

/**
 * Lerp factor per frame for smooth camera transitions (0 < value < 1).
 * Higher = snappier, lower = slower.
 */
const LERP_FACTOR = 0.06

/**
 * CameraRig
 *
 * Manages camera animation in response to viewMode and selectedPart changes.
 * OrbitControls is always mounted but is disabled (read-only) except in 'free' mode.
 *
 * Smooth lerping is performed inside useFrame so it respects deltaTime implicitly
 * through the framerate-dependent lerp (acceptable for a viewer app).
 */
export default function CameraRig() {
  const { camera } = useThree()
  const controlsRef = useRef()

  // Store state
  const viewMode     = useAnatomyStore((state) => state.viewMode)
  const selectedPart = useAnatomyStore((state) => state.selectedPart)

  // Working vectors – allocated once, mutated every frame
  const targetPosition = useRef(new THREE.Vector3(0, 0, 5))
  const targetLookAt   = useRef(new THREE.Vector3(0, 0, 0))
  const isAnimating    = useRef(false)

  // ── React to viewMode changes ──────────────────────────────────────────────
  useEffect(() => {
    const pos = VIEW_POSITIONS[viewMode]
    const tgt = VIEW_TARGETS[viewMode]

    if (pos && tgt) {
      targetPosition.current.copy(pos)
      targetLookAt.current.copy(tgt)
      isAnimating.current = true

      // Unlock / lock OrbitControls
      if (controlsRef.current) {
        controlsRef.current.enabled = viewMode === 'free'
      }
    } else if (viewMode === 'free') {
      // Re-enable controls without forcing a camera jump
      if (controlsRef.current) {
        controlsRef.current.enabled = true
      }
      isAnimating.current = false
    }
  }, [viewMode])

  // ── React to selectedPart changes ──────────────────────────────────────────
  useEffect(() => {
    if (!selectedPart) return

    // Each anatomy part may carry a `position` as an array [x, y, z] or an
    // object {x, y, z}.  Handle both forms and fall back to the origin.
    const rawPos = selectedPart.position
    let partPos
    if (!rawPos) {
      partPos = new THREE.Vector3(0, 0, 0)
    } else if (Array.isArray(rawPos)) {
      partPos = new THREE.Vector3(...rawPos)
    } else {
      partPos = new THREE.Vector3(rawPos.x ?? 0, rawPos.y ?? 0, rawPos.z ?? 0)
    }

    // Back the camera off by 3 units along its current forward direction
    // so the selected part is nicely framed.
    const offset = camera.position.clone().sub(partPos).normalize().multiplyScalar(3)
    targetPosition.current.copy(partPos).add(offset)
    targetLookAt.current.copy(partPos)
    isAnimating.current = true
  }, [selectedPart]) // eslint-disable-line react-hooks/exhaustive-deps

  // ── Per-frame lerp ─────────────────────────────────────────────────────────
  useFrame(() => {
    if (!isAnimating.current) return

    // Lerp camera position
    camera.position.lerp(targetPosition.current, LERP_FACTOR)

    // Lerp the controls target (or the camera lookAt when controls are disabled)
    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt.current, LERP_FACTOR)
      controlsRef.current.update()
    } else {
      camera.lookAt(targetLookAt.current)
    }

    // Stop animating once close enough (avoids perpetual micro-updates)
    const posClose = camera.position.distanceTo(targetPosition.current) < 0.005
    const tgtClose = controlsRef.current
      ? controlsRef.current.target.distanceTo(targetLookAt.current) < 0.005
      : true

    if (posClose && tgtClose) {
      isAnimating.current = false
    }
  })

  return (
    <OrbitControls
      ref={controlsRef}
      enableDamping
      dampingFactor={0.05}
      minDistance={2}
      maxDistance={10}
      enabled={viewMode === 'free'}
      makeDefault
    />
  )
}
