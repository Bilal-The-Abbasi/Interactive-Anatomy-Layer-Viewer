import React, { useRef } from 'react'

/**
 * SceneLighting
 *
 * Provides all lights for the anatomy viewer scene.
 * Colour palette chosen for a cool medical/scientific aesthetic:
 *   - Deep-blue ambient to fill shadows with colour
 *   - Slightly warm-white key light (directional, front-top-right)
 *   - Cyan rim light from the left
 *   - Purple rim light from the right
 *   - Hemisphere sky/ground gradient
 *   - Soft point light just above and in front of the figure
 */
export default function SceneLighting() {
  const directionalRef = useRef()

  return (
    <>
      {/* Ambient – low-intensity deep-blue fill so shadows stay coloured */}
      <ambientLight
        intensity={0.3}
        color="#1a2a4a"
      />

      {/* Key light – front-top-right, slightly blue-white, casts shadows */}
      <directionalLight
        ref={directionalRef}
        position={[3, 4, 3]}
        intensity={1.2}
        color="#e0e8ff"
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-camera-near={0.5}
        shadow-camera-far={20}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={5}
        shadow-camera-bottom={-3}
        shadow-bias={-0.0005}
      />

      {/* Left rim – cyan, creates a cool separation edge */}
      <spotLight
        position={[-4, 1, 1]}
        target-position={[0, 0, 0]}
        color="#4fc3f7"
        intensity={0.5}
        angle={Math.PI / 5}
        penumbra={0.6}
        decay={2}
        distance={12}
        castShadow={false}
      />

      {/* Right rim – purple, adds warmth contrast on opposite side */}
      <spotLight
        position={[4, 0.5, 0]}
        target-position={[0, 0, 0]}
        color="#c084fc"
        intensity={0.3}
        angle={Math.PI / 5}
        penumbra={0.7}
        decay={2}
        distance={12}
        castShadow={false}
      />

      {/* Hemisphere – simulates sky/ground bounce */}
      <hemisphereLight
        args={['#1e3a5f', '#0a0f1a', 0.4]}
      />

      {/* Soft front fill – floats just above the figure */}
      <pointLight
        position={[0, 2, 1]}
        color="#60a5fa"
        intensity={0.8}
        decay={2}
        distance={8}
        castShadow={false}
      />
    </>
  )
}
