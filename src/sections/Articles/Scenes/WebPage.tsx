import { Html } from '@react-three/drei';
import WebContent from './WebContent';

const WebPage = () => (
  <Html
    position={[0, 1.35, 1.25]}
    transform
    occlude="blending"
    style={{
      backgroundColor: '#fff',
      width: '460px',
      height: '290px',
      borderRadius: '5px',
      padding: '20px 10px',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 15,
      fontFamily: "'Open Sans', sans-serif",
      filter: 'brightness(0.95)',
    }}
    rotation={[0, Math.PI, 0]}
    scale={0.3}
  >
    <WebContent />
  </Html>
);
 
export default WebPage;
