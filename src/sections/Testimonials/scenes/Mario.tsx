import { Dispatch, RefObject, useCallback, useEffect, useRef, useState } from 'react';
import { Mesh } from 'three';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import {  Physics, RapierRigidBody, RigidBody } from '@react-three/rapier';

interface MarioProps {
  isJumping: boolean;
  setIsMarioJumping: Dispatch<React.SetStateAction<boolean>>;
  instanceApi: RefObject<RapierRigidBody>;
  marioRef: RefObject<Mesh>;
  runSpecificAnimation: (
    animationName: 'mixamo.com' | 'Run' | 'Jump',
    animations: ReturnType<typeof useAnimations>,
  ) => void;
}

const Mario = ({
  isJumping,
  setIsMarioJumping,
  instanceApi,
  marioRef,
  runSpecificAnimation,
}: MarioProps) => {
  const [isRunning, setIsRunning] = useState(false);

  const mario = useGLTF('/mario.glb');
  const animations = useAnimations(mario.animations, marioRef);

  const runOrStopAnimation = useCallback(() => {
    if (isJumping) return;

    if (isRunning) {
      runSpecificAnimation('Run', animations);
    } else {
      runSpecificAnimation('mixamo.com', animations);
      animations.actions.Run!.stop();
    }
  }, [isJumping, isRunning, runSpecificAnimation, animations]);

  useEffect(() => {
    runOrStopAnimation();
  }, [runOrStopAnimation]);

  useEffect(() => {
    const onContainerClick = () => {
      if (isJumping) return;
  
      instanceApi.current!.applyImpulse({ x: 0, y: 1, z: 0 }, true);
      setIsMarioJumping(true);
      runSpecificAnimation('Jump', animations);
      
      setTimeout(() => {
        setIsMarioJumping(false);
        runSpecificAnimation('Run', animations);
      }, 1000);
    };

    document.body.addEventListener('onContainerClick', onContainerClick);

    return () => {
      document.body.removeEventListener('onContainerClick', onContainerClick);
    };
  }, [animations, instanceApi, isJumping, runSpecificAnimation, setIsMarioJumping]);
  
  useFrame((state, delta) => {
    if (!marioRef.current) return;

    const mouseX = state.mouse.x * 10 / 2;
    const { x: marioX } = marioRef.current.position;

    if (Math.abs(mouseX - marioX) < 0.1) {
      return setIsRunning(false);
    }

    setIsRunning(true);
    
    const direction = mouseX > marioX ? 1 : -1;

    const speedMultiplier = 2;

    marioRef.current.position.x += delta * direction * speedMultiplier;

    marioRef.current.rotation.y = Math.PI / 2 * direction;
  });

  return (
    <Physics>
      <RigidBody ref={instanceApi}>
        <primitive
          ref={marioRef}
          object={mario.scene}
          scale={0.5}
          position={[0, -3.5, -1 ]}
          rotation={[0, -Math.PI / 2, 0]}
        />
      </RigidBody>
      
      <RigidBody type="fixed" lockRotations lockTranslations>
        <mesh position={[0, -4.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <boxGeometry args={[15, 6, 0.3]} />
          <meshBasicMaterial transparent opacity={0} />
        </mesh>
      </RigidBody>
    </Physics>
  );
};
 
export default Mario;
