import * as THREE from 'three';
import { useRef, useState } from 'react';
import { useFrame, ThreeEvent, useLoader } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useSpring } from '@react-spring/core';
import { a } from '@react-spring/three';
import { Mesh, Group } from 'three';

interface CardProps {
  position: [number, number, number];
  isSelected: boolean;
  handleClick: (event: ThreeEvent<MouseEvent>) => void;
}

const Card = ({ position, isSelected, handleClick }: CardProps) => {
  const cardRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const spring = useSpring({
    scale: hovered ? 1.05 : 1,
    ...(isSelected
      ? {
        positionX: 0,
        positionZ: 2,
      } : {
        positionX: position[0],
        positionZ: position[2],
      }),
  });

  useFrame((state) => {
    if (!cardRef.current) return;

    const { elapsedTime } = state.clock;

    if (!isSelected || Math.abs(cardRef.current.position.y) > 0.05) {
      cardRef.current.position.y = position[1] + Math.sin(elapsedTime * 2) * 0.05;
    }
  });

  return (
    <>
      <a.mesh
        onPointerOut={() => setHovered(false)}
        onPointerEnter={() => setHovered(true)}
        ref={cardRef}
        position-x={spring.positionX}
        position-y={position[1]}
        position-z={spring.positionZ}
        scale={spring.scale}
        onClick={handleClick}
      >
        <boxGeometry args={[2, 3, 0.5]} />
        <meshStandardMaterial color="#020154" />

        <group position-z={0.26}>
          <Html
            transform
            occlude
            onOcclude={() => null}
            style={{
              backgroundColor: '#fff',
              opacity: 1,
              transition: 'opacity 0.3s',
            }}>
            <h1>Ahoi</h1>
          </Html>
        </group>
      </a.mesh>

    </>
  );
};
 
export default Card;
