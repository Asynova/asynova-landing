/**
 * Revolutionary 3D Visualizations - TypeScript-Safe Version
 * Guaranteed to work with proper type definitions
 */

import React, { useRef, useState, Suspense, useMemo } from 'react';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { theme } from './theme';

// Simple Neural Network Visualization
export const NeuralNetworkVisualization: React.FC<{
  nodes?: number;
  animated?: boolean;
  color?: string;
}> = ({ nodes = 20, animated = true, color = '#00d4ff' }) => {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate node positions
  const nodePositions = useMemo(() => 
    Array.from({ length: nodes }, () => [
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6,
      (Math.random() - 0.5) * 6
    ] as [number, number, number])
  , [nodes]);

  useFrame(({ clock }) => {
    if (animated && groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.1;
      groupRef.current.rotation.x = Math.sin(clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {nodePositions.map((position, i) => (
        <Float key={`node-${i}`} speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <Sphere args={[0.08, 12, 12]} position={position}>
            <meshStandardMaterial 
              color={color} 
              emissive={color} 
              emissiveIntensity={0.3}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

// Financial Flow Visualization
export const FinancialFlowVisualization: React.FC<{
  particleCount?: number;
}> = ({ particleCount = 50 }) => {
  const particles = useMemo(() => 
    Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ] as [number, number, number],
      speed: Math.random() * 0.02 + 0.01
    }))
  , [particleCount]);

  return (
    <group>
      {particles.map((particle) => (
        <Float 
          key={particle.id} 
          speed={particle.speed * 100} 
          rotationIntensity={0.2} 
          floatIntensity={0.5}
        >
          <Sphere args={[0.02, 8, 8]} position={particle.position}>
            <meshStandardMaterial 
              color="#00d4ff" 
              emissive="#00d4ff" 
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
};

// Quantum Sphere - Interactive
export const QuantumSphere: React.FC<{
  size?: number;
  speed?: number;
}> = ({ size = 2, speed = 2 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = clock.elapsedTime * 0.3;
      
      // Add pulsing effect
      const scale = 1 + Math.sin(clock.elapsedTime * 2) * 0.05;
      meshRef.current.scale.setScalar(scale);
    }
  });

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(true);
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    setHovered(false);
  };

  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={1}>
      <Sphere
        ref={meshRef}
        args={[size, 32, 32]}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshStandardMaterial
          color={hovered ? theme.colors.quantum.purple : theme.colors.quantum.blue}
          emissive={hovered ? theme.colors.quantum.purple : theme.colors.quantum.blue}
          emissiveIntensity={0.2}
          metalness={0.8}
          roughness={0.2}
          wireframe={hovered}
        />
      </Sphere>
    </Float>
  );
};

// Data Cube Grid
export const DataCubeGrid: React.FC<{
  gridSize?: number;
  spacing?: number;
}> = ({ gridSize = 3, spacing = 1.2 }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.elapsedTime * 0.1;
    }
  });

  interface CubeData {
    key: string;
    position: [number, number, number];
    color: string;
  }

  const cubes = useMemo((): CubeData[] => {
    const result: CubeData[] = [];
    const offset = (gridSize - 1) * spacing / 2;
    
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        for (let z = 0; z < gridSize; z++) {
          result.push({
            key: `${x}-${y}-${z}`,
            position: [
              x * spacing - offset,
              y * spacing - offset,
              z * spacing - offset
            ],
            color: `hsl(${(x + y + z) * 30}, 70%, 50%)`
          });
        }
      }
    }
    return result;
  }, [gridSize, spacing]);

  return (
    <group ref={groupRef}>
      {cubes.map((cube) => (
        <Box
          key={cube.key}
          args={[0.4, 0.4, 0.4]}
          position={cube.position}
        >
          <meshStandardMaterial
            color={cube.color}
            emissive={cube.color}
            emissiveIntensity={0.1}
            metalness={0.5}
            roughness={0.3}
          />
        </Box>
      ))}
    </group>
  );
};

// 3D Scene Container
export const ThreeDScene: React.FC<{
  children: React.ReactNode;
  className?: string;
  fog?: boolean;
  stars?: boolean;
}> = ({ children, className = '', fog = true, stars = true }) => {
  return (
    <div 
      className={`three-d-scene ${className}`} 
      style={{ width: '100%', height: '100%', minHeight: '400px' }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          {/* Lighting */}
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b829ff" />
          
          {/* Fog effect */}
          {fog && <fog attach="fog" args={['#0a0c0e', 5, 20]} />}
          
          {/* Stars background */}
          {stars && (
            <Stars
              radius={50}
              depth={25}
              count={1000}
              factor={3}
              saturation={0}
              fade
              speed={1}
            />
          )}
          
          {children}
          
          {/* Controls */}
          <OrbitControls 
            enablePan={false} 
            enableZoom={false} 
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

// 4D Visualization - Time-based animation
export const FourDVisualization: React.FC<{
  dataPoints?: number;
}> = ({ dataPoints = 12 }) => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    
    const time = clock.elapsedTime;
    groupRef.current.rotation.y = time * 0.1;
    
    // Animate children positions in 4D space (3D + time)
    groupRef.current.children.forEach((child, i) => {
      const offset = (i / dataPoints) * Math.PI * 2;
      const radius = 3 + Math.sin(time + offset) * 1;
      const height = Math.sin(time * 0.5 + offset) * 2;
      
      child.position.set(
        Math.cos(offset + time * 0.2) * radius,
        height,
        Math.sin(offset + time * 0.2) * radius
      );
      
      child.scale.setScalar(0.5 + Math.sin(time + i) * 0.3);
    });
  });

  const spheres = useMemo(() => 
    Array.from({ length: dataPoints }, (_, i) => ({
      key: i,
      color: `hsl(${i * 360 / dataPoints}, 70%, 50%)`
    }))
  , [dataPoints]);

  return (
    <group ref={groupRef}>
      {spheres.map((sphere) => (
        <Sphere key={sphere.key} args={[0.15, 12, 12]}>
          <meshStandardMaterial 
            color={sphere.color}
            emissive={sphere.color}
            emissiveIntensity={0.3}
            metalness={0.6}
            roughness={0.2}
          />
        </Sphere>
      ))}
    </group>
  );
};

// Error Boundary for 3D Components
export const ThreeDErrorBoundary: React.FC<{
  children: React.ReactNode;
  fallback?: React.ReactNode;
}> = ({ children, fallback = null }) => {
  const [hasError, setHasError] = useState(false);

  React.useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl">
        {fallback || (
          <div className="text-center text-white/60">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-white/20 animate-pulse" />
            </div>
            <p>3D visualization loading...</p>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
};

// Export all components
export default {
  NeuralNetworkVisualization,
  FinancialFlowVisualization,
  QuantumSphere,
  DataCubeGrid,
  ThreeDScene,
  FourDVisualization,
  ThreeDErrorBoundary,
};
