const Lights = () => (
  <>
    <ambientLight intensity={0.5} />

    <pointLight position={[0, 1, 0]} intensity={0.5} />

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
