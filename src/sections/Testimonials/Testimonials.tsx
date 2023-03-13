import { useAnimations } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { RapierRigidBody } from '@react-three/rapier';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Mesh } from 'three';
import Card from './scenes/Card';
import Lights from './scenes/Lights';
import Mario from './scenes/Mario';
import {
  Container,
  StyledCanvas,
  TitleContainer,
  Title,
  Subtitle,
} from './styles';

const Testimonials = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isMarioJumping, setIsMarioJumping] = useState(false);
  const instanceApi = useRef<RapierRigidBody>(null);
  const marioRef = useRef<Mesh>(null);

  // useEffect(() => {
  //   instanceApi.lockRotations();
  // }, []);

  const handleSelectCard = useCallback((event: ThreeEvent<MouseEvent>, index: number) => {
    event.stopPropagation();

    if (selectedCard === index) {
      return setSelectedCard(null);
    }

    setSelectedCard(index);
  }, [selectedCard]);

  const cards = useMemo(() => {
    const testmonials = [
      {
        name: 'Danilo Simei',
        company: 'Neurotech',
        image: '/lilin.jpeg',
      },
      {
        name: 'Mike Greenspan',
        company: 'Auvik',
        image: '/mike.jpeg',
      },
      {
        name: 'Dan Pettit',
        company: 'Appcues',
        image: '/dan.jpeg',
      },
    ];

    return testmonials.map(({
      name,
      company,
      image,
    }: {
        name: string;
        company: string;
        image: string;
      }, index: number) => (
      <Card
        key={`testimonial-card-${name}`}
        isSelected={selectedCard === index}
        position={[3 * (index - 1), -0.5, 0]}
        handleClick={(event: ThreeEvent<MouseEvent>) => handleSelectCard(event, index)}
        name={name}
        company={company}
        image={image}
      />
    ));}, [handleSelectCard, selectedCard]);

  const onContainerClick = () => {
    document.body.dispatchEvent(new Event('onContainerClick'));
  };

  const runSpecificAnimation = useCallback((
    animationName: 'mixamo.com' | 'Run' | 'Jump',
    animations: ReturnType<typeof useAnimations>
  ) => {
    const animationOptions = ['mixamo.com', 'Run', 'Jump'];
    animationOptions.forEach((animation) => {
      if (animation === animationName) {
        return animations.actions[animationName]!.play();
      }
      animations.actions[animation]!.stop();
    });
  }, []);

  return (
    <Container onClick={onContainerClick}>
      <TitleContainer>
        <Title>Testimonials</Title>
        <Subtitle>from my past managers</Subtitle>
      </TitleContainer>

      <StyledCanvas eventPrefix="client">
        {cards}

        <Mario
          marioRef={marioRef}
          instanceApi={instanceApi}
          isJumping={isMarioJumping}
          setIsMarioJumping={setIsMarioJumping}
          runSpecificAnimation={runSpecificAnimation}
        />
        <Lights />
      </StyledCanvas>
    </Container>
  );
};
 
export default Testimonials;
