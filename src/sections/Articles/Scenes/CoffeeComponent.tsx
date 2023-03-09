import { useGLTF } from '@react-three/drei';
import { BufferGeometry, Material } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface GLTFResult extends GLTF {
  nodes: {
    Circle: {
      geometry: BufferGeometry;
    };
  };
  materials: {
    'Coffee bean': Material;
  };
}

const CoffeeComponent = () => {
  const { nodes, materials } = useGLTF('/coffeeBean.glb') as GLTFResult;

  return (
    <group dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials['Coffee bean']}
      />
    </group>
  );
};

useGLTF.preload('/coffeeBean.glb');

export default CoffeeComponent;
