import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import { BufferGeometry, Material, Points, Vector3 } from 'three';

export function FooterBackground() {
  const pointsRef = useRef<Points<BufferGeometry, Material> | null>(null); // Use Points type
  const count = 200;
  const sep = 3;

  const positions = useMemo(() => {
    const positions = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        const x = sep * (xi - count / 2);
        const z = sep * (zi - count / 2);
        const y = 0;
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const points = pointsRef.current; // Access Points instead of Mesh

    if (points) {
      const positionArray = points.geometry.attributes.position.array as Float32Array;

      for (let i = 0; i < count * count; i++) {
        const xi = i % count;
        const zi = Math.floor(i / count);

        const offset = positions[i * 3 + 2] + time * 10;
        const angle = offset * 0.1 + xi * 0.01;
        const radius = 5;

        positionArray[i * 3 + 1] = Math.sin(angle) * radius; // Update y-coordinate
      }

      points.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#3b82f6" sizeAttenuation={true} />
    </points>
  );
}
