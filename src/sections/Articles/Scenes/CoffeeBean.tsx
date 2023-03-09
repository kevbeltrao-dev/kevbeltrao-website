import { memo, Suspense } from 'react';
import { RigidBody } from '@react-three/rapier';
import CoffeeComponent from './CoffeeComponent';

interface CoffeeBeanProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

const CoffeeBean = ({ position, rotation }: CoffeeBeanProps) => {
  const scale = 0.1;
  
  return (
    <RigidBody position={position} rotation={rotation} scale={scale}>
      <Suspense fallback={null}>
        <CoffeeComponent />
      </Suspense>
    </RigidBody>
  );
};

export default memo(CoffeeBean);
