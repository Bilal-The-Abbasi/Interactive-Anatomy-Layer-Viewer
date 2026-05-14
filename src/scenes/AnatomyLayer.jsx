import React from 'react'

/**
 * LayerMaterial
 *
 * Shared material component used by every anatomy mesh.
 * Accepts color/emissive/opacity/wireframe props and renders a single
 * `meshStandardMaterial` with consistent PBR settings.
 *
 * Props
 * ──────────────────────────────────────────────────────────────────────────────
 * @param {string}  color            – base diffuse colour (hex string)
 * @param {string}  emissiveColor    – emissive colour (hex string)
 * @param {number}  emissiveIntensity– [0–1+] how strongly the emissive shows
 * @param {number}  opacity          – [0–1] material opacity
 * @param {boolean} wireframe        – render as wireframe (default false)
 * @param {boolean} depthWrite       – control depth writes (default: opacity >= 1)
 */
export function LayerMaterial({
  color          = '#ffffff',
  emissiveColor  = '#000000',
  emissiveIntensity = 0,
  opacity        = 1,
  wireframe      = false,
  depthWrite,
  ...rest
}) {
  const effectiveDepthWrite = depthWrite !== undefined ? depthWrite : opacity >= 0.99

  return (
    <meshStandardMaterial
      color={color}
      emissive={emissiveColor}
      emissiveIntensity={emissiveIntensity}
      opacity={opacity}
      transparent={opacity < 0.99}
      wireframe={wireframe}
      roughness={0.6}
      metalness={0.1}
      depthWrite={effectiveDepthWrite}
      {...rest}
    />
  )
}

/**
 * GlowMaterial
 *
 * Variant of LayerMaterial with boosted emissive intensity for selected/hovered
 * anatomy parts.  Drop-in replacement – accepts the same props plus a `selected`
 * and `hovered` flag that override emissiveIntensity automatically.
 *
 * Props
 * ──────────────────────────────────────────────────────────────────────────────
 * @param {boolean} selected  – renders at full glow intensity (0.8)
 * @param {boolean} hovered   – renders at half glow intensity (0.5)
 * All other props forwarded to LayerMaterial.
 */
export function GlowMaterial({
  selected          = false,
  hovered           = false,
  emissiveColor     = '#ffffff',
  emissiveIntensity: _ignored, // derived from selected/hovered
  ...rest
}) {
  const intensity = selected ? 0.8 : hovered ? 0.5 : 0

  return (
    <LayerMaterial
      emissiveColor={intensity > 0 ? emissiveColor : '#000000'}
      emissiveIntensity={intensity}
      {...rest}
    />
  )
}

export default LayerMaterial
