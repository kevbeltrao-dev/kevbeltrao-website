import { useGLTF } from '@react-three/drei';
import { RigidBody, CylinderCollider } from '@react-three/rapier';

const BoloDeRolo = () => {
  const boloDeRolo = useGLTF('/boloDeRoloOnAPlate.glb');
  return (
    <RigidBody colliders={false} type="fixed">
      <primitive
        object={boloDeRolo.scene}
        scale={0.4}
        position={[-2.5, -0.82, -0.3]}
      />

      <CylinderCollider
        position={[-2.5, -0.6, -0.33]}
        args={[0.1, 0.3]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <CylinderCollider
        position={[-2.5, -0.8, -0.3]}
        args={[0.05, 0.55]}
      />
    </RigidBody>
  );
};
 
export default BoloDeRolo;
