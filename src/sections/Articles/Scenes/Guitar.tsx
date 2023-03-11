import { useGLTF } from '@react-three/drei';

const Guitar = () => {
  const guitar = useGLTF('/guitar.glb');
  return (
    <primitive
      object={guitar.scene}
      scale={110}
      rotation={[0, Math.PI - 0.5, 0]}
      position={[-4, -4, 5.5]}
    />
  );
};
 
export default Guitar;
