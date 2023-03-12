import { useGLTF, useAnimations } from '@react-three/drei';
import { useEffect } from 'react';

const Plane = () => {
  const plane = useGLTF('/plane.glb');
  const animations = useAnimations(plane.animations);

  useEffect(() => {
    console.log(animations.actions);
  }, [animations]);

  return (
    <primitive
      object={plane.scene}
      scale={0.5}
      rotation={[0, Math.PI / 2, 0]}
      position={[15, 4.5, 20]}
    />
  );
};
 
export default Plane;
