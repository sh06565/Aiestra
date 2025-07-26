import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField({ count = 1000 }) {
  const mesh = useRef()
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
      
      // Gradient colors from cyan to indigo
      const t = Math.random()
      colors[i * 3] = 0 + t * 0.24 // R: 0 to 0.24
      colors[i * 3 + 1] = 1 - t * 0.3 // G: 1 to 0.7
      colors[i * 3 + 2] = 0.78 + t * 0.22 // B: 0.78 to 1
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
      mesh.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1
    }
  })

  return (
    <Points ref={mesh} positions={particles.positions} colors={particles.colors}>
      <PointMaterial
        transparent
        vertexColors
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function ConnectionLines({ count = 50 }) {
  const linesRef = useRef()
  
  const lines = useMemo(() => {
    const positions = []
    const colors = []
    
    for (let i = 0; i < count; i++) {
      const x1 = (Math.random() - 0.5) * 20
      const y1 = (Math.random() - 0.5) * 20
      const z1 = (Math.random() - 0.5) * 20
      
      const x2 = x1 + (Math.random() - 0.5) * 4
      const y2 = y1 + (Math.random() - 0.5) * 4
      const z2 = z1 + (Math.random() - 0.5) * 4
      
      positions.push(x1, y1, z1, x2, y2, z2)
      
      // Gradient colors
      const t = Math.random()
      const r = 0 + t * 0.24
      const g = 1 - t * 0.3
      const b = 0.78 + t * 0.22
      
      colors.push(r, g, b, r, g, b)
    }
    
    return { positions: new Float32Array(positions), colors: new Float32Array(colors) }
  }, [count])

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.05
      linesRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.05
    }
  })

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={lines.positions.length / 3}
          array={lines.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={lines.colors.length / 3}
          array={lines.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        transparent
        vertexColors
        opacity={0.3}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  )
}

const ParticleNetwork = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <ParticleField count={800} />
        <ConnectionLines count={100} />
      </Canvas>
    </div>
  )
}

export default ParticleNetwork 