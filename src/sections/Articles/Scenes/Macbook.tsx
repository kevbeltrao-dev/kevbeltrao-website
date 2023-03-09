import { memo } from 'react';
import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import WebPage from './WebPage';

const Macbook = () => {
  // https://sketchfab.com/3d-models/macbook-pro-2021-37763335f74b497e91906986b170b5d1
  const macbook = useGLTF('/macbook_pro_2021.glb');

  return (
    <RigidBody type="fixed" position={[0, -0.85, 0]}>
      <group>
        <WebPage />

        <primitive object={macbook.scene} scale={10} rotation={[0, -Math.PI / 2, 0]} receiveShadow />
      </group>
    </RigidBody>
  );
};

export default memo(Macbook);
