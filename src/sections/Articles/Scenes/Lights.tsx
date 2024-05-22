const Lights = () => (
  <>
    <ambientLight intensity={2} />

    <pointLight position={[0, 1, 1]} intensity={1.5} />
    
    <pointLight
      args={['white', 1, 100]}
      position={[0, 5, 0]}
      intensity={20}
    />

    <group rotation={[Math.PI / 2, 0, 0]}>
      <spotLight
        position={[0, 1, 0]}
        angle={Math.PI / 2}
        penumbra={1}
        intensity={0.8}
        castShadow
      />
    </group>
  </>
);

export default Lights;
