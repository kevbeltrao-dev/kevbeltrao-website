import { memo } from 'react';
import { useLoader } from '@react-three/fiber';
import { RigidBody } from '@react-three/rapier';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

const Table = () => {
  const colorMap = useLoader(TextureLoader, '/WoodFineDark004_COL_2K.jpg');

  return (
    <RigidBody type="fixed">
      <mesh receiveShadow position={[0, -1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[8, 5, 0.3]} />
        <meshStandardMaterial map={colorMap} />
      </mesh>
    </RigidBody>
  );
};

export default memo(Table);
