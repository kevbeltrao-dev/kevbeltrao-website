import { MouseEventHandler, useRef, useState, useEffect } from 'react';
import { Mesh } from 'three';
import { useFrame, ThreeEvent } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { useSpring, animated } from '@react-spring/three';
import styled from 'styled-components';

interface CardProps {
  position: [number, number, number];
  isSelected: boolean;
  handleClick: (event: ThreeEvent<MouseEvent>) => void;
  name: string;
  company: string;
  image: string;
  text1: string;
  text2: string;
  linkedin: string;
}

const LinkedinLink = styled.a`
  font-size: 4px;
  margin-top: 4px;
  font-weight: bold;
  text-decoration: underline;
  transition: color 0.3s;

  &:hover {
    color: #CD428D;
  }
`;

const Card = ({
  position,
  isSelected,
  handleClick,
  name,
  company,
  image,
  text1,
  text2,
  linkedin,
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
    ...(isSelected
      ? {
        positionX: 0,
        positionY: 0,
        positionZ: 2,
      } : {
        positionX: position[0],
        positionY: position[1],
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
        position-y={spring.positionY}
        position-z={spring.positionZ}
        onClick={handleClick}
      >
        <boxGeometry args={[2.5, 3.5, 0.5]} />
        <meshStandardMaterial color={ htmlHover || threeHover ? '#02015b' : '#020154' } />

        <group position-z={0.26}>
          <Html
            transform
            occlude
            style={{
              opacity: 1,
              transition: 'opacity 0.3s',
              width: 100,
              height: 140,
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
              
              <LinkedinLink href={linkedin} target="_blank">
                {name} - {company}
              </LinkedinLink>

              <span
                style={{
                  fontSize: 3,
                  marginTop: 4,
                }}
              >
                {text1}
                <br />
                <br />
                {text2}
              </span>

            </div>
          </Html>
        </group>
      </animated.mesh>

    </>
  );
};
 
export default Card;
