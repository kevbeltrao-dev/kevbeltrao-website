import { useEffect, useRef } from 'react';
import { Mesh } from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Plane = () => {
  const ref = useRef<Mesh>(null);
  const plane = useGLTF('/plane.glb');
  const animations = useAnimations(plane.animations, ref);

  useEffect(() => {
    animations.actions.Action!.play();
  }, [animations]);
  
  const initialX = 15;

  useFrame((state) => {
    if (!ref.current) return;

    const { elapsedTime } = state.clock;
    ref.current.position.x = initialX + Math.sin(elapsedTime) * 6;
    ref.current.rotation.z = Math.sin(elapsedTime);
    ref.current.rotation.y = (Math.cos(elapsedTime) * Math.PI) / 2;
  });

  return (
    <primitive
      ref={ref}
      object={plane.scene}
      scale={0.5}
      rotation={[0, Math.PI / 2, 0]}
      position={[initialX, 4.5, 20]}
    />
  );
};
 
export default Plane;
