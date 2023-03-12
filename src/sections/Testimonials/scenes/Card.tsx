import { MouseEventHandler, useRef, useState, useEffect } from 'react';
import { Mesh } from 'three';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';

interface CardProps {
  position: [number, number, number];
  isSelected: boolean;
  handleClick: (event: ThreeEvent<MouseEvent>) => void;
  name: string;
  company: string;
  image: string;
}

const Card = ({
  position,
  isSelected,
  handleClick,
  name,
  company,
  image,
}: CardProps) => {
  const cardRef = useRef<Mesh>(null);
  const [htmlHover, setHtmlHover] = useState(false);
  const [threeHover, setThreeHover] = useState(false);

  useEffect(() => {
    if (htmlHover || threeHover) {
      document.body.style.cursor = 'pointer';
      return;
    }
  
    document.body.style.cursor = '';

    return () => {
      document.body.style.cursor = '';
    };
  }, [htmlHover, threeHover]);

  const spring = useSpring({
    scale: (htmlHover || threeHover) ? 1.05 : 1,
    ...(isSelected
      ? {
        positionX: 0,
        positionZ: 2,
      } : {
        positionX: position[0],
        positionZ: position[2],
      }),
  });

  useFrame((state) => {
    if (!cardRef.current) return;

    const { elapsedTime } = state.clock;

    if (
      !isSelected
      || Math.abs(cardRef.current.position.y) + position[1] > 0.01
    ) {
      cardRef.current.position.y = position[1] + Math.sin(elapsedTime * 2) * 0.05;
    }
  });

  const handleHTMLClick: MouseEventHandler<HTMLDivElement> = (event) => {
    handleClick(event as unknown as ThreeEvent<MouseEvent>);
  };

  return (
    <>
      <animated.mesh
        onPointerOut={() => setThreeHover(false)}
        onPointerEnter={() => setThreeHover(true)}
        ref={cardRef}
        position-x={spring.positionX}
        position-y={position[1]}
        position-z={spring.positionZ}
        scale={spring.scale}
        onClick={handleClick}
      >
        <boxGeometry args={[2, 3, 0.5]} />
        <meshStandardMaterial color="#020154" />

        <group position-z={0.26}>
          <Html
            transform
            occlude
            style={{
              opacity: 1,
              transition: 'opacity 0.3s',
              width: 79,
              height: 120,
              background: 'transparent',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            <div
              onClick={handleHTMLClick}
              onMouseEnter={() => setHtmlHover(true)}
              onMouseLeave={() => setHtmlHover(false)}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 10,
              }}
            >

              <div style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
              }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt=""
                  style={{
                    width: '100%',
                  }}
                />
              </div>
              
              <span
                style={{
                  fontSize: 4,
                  marginTop: 4,
                  fontWeight: 'bold',
                }}>{name} - {company}</span>

              <span
                style={{
                  fontSize: 3.5,
                  marginTop: 4,
                }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                <br />
                <br />
                  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
              </span>

            </div>
          </Html>
        </group>
      </animated.mesh>

    </>
  );
};
 
export default Card;
