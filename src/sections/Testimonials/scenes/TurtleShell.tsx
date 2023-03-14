import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

const TurtleShell = () => {
  const turtleShell = useGLTF('/turtle_shell.glb');
  const ref = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.position.x += delta * 5;
    ref.current.rotation.y += delta * 5;

    if (ref.current.position.x > 20) {
      ref.current.position.x = -20;
    }
  });

  return (
    <primitive
      ref={ref}
      object={turtleShell.scene}
      scale={0.1}
      rotation={[0, Math.PI / 2, 0]}
      position={[-20, -4, -1]}
    />
  );
};
 
export default TurtleShell;
