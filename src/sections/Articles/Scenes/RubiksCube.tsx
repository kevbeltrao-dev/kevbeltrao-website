import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';

const RubiksCube = () => {
  const rubiksCube = useGLTF('/rubiksCube.glb');
  return (
    <RigidBody type="fixed">
      <primitive
        object={rubiksCube.scene}
        scale={0.1}
        position={[2.5, -0.55, -0.3]}
      />
    </RigidBody>
  );
};
 
export default RubiksCube;
