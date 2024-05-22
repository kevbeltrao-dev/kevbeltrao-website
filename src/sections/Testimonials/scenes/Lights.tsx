const Lights = () => {
  return (
    <>
      <ambientLight intensity={4} />
      <pointLight position={[-3, 5, 1]} intensity={1.5} />
    </>
  );
};
 
export default Lights;
