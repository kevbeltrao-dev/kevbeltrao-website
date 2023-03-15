import { useAnimations } from '@react-three/drei';
import { ThreeEvent } from '@react-three/fiber';
import { RapierRigidBody } from '@react-three/rapier';
import { useCallback, useMemo, useRef, useState } from 'react';
import { Mesh } from 'three';
import Card from './scenes/Card';
import Lights from './scenes/Lights';
import Mario from './scenes/Mario';
import TurtleShell from './scenes/TurtleShell';
import {
  Container,
  StyledCanvas,
  TitleContainer,
  Title,
  Subtitle,
} from './styles';

interface Testimonal {
  name: string;
  company: string;
  image: string;
  text1: string;
  text2: string;
  text3?: string;
  linkedin: string;
}

const Testimonials = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);
  const [isMarioJumping, setIsMarioJumping] = useState(false);
  const instanceApi = useRef<RapierRigidBody>(null);
  const marioRef = useRef<Mesh>(null);

  const handleSelectCard = useCallback((event: ThreeEvent<MouseEvent>, index: number) => {
    event.stopPropagation();

    if (selectedCard === index) {
      return setSelectedCard(null);
    }

    setSelectedCard(index);
  }, [selectedCard]);

  const cards = useMemo(() => {
    const testmonials: Testimonal[] = [
      {
        name: 'Danilo Simei',
        company: 'Neurotech',
        image: '/lilin.jpeg',
        text1: 'Kev is undoubtedly one of the best professionals and high spirited I have ever worked with. He is an easy going guy who makes the environment funny, enjoyable, comfortable.',
        text2: 'Kev has extensive experience in designing and developing complex software systems, with a deep understanding of JS (the best to be honest). They have a proven track record of delivering high-quality work under tight deadlines, with exceptional attention to detail and a commitment to excellence.',
        text3: 'In addition to their technical expertise, Kev is an excellent communicator and collaborator, able to work effectively in team environments and provide guidance to other team members. They are always willing to go above and beyond to ensure the success of the project and the satisfaction of the client.',
        linkedin: 'https://www.linkedin.com/in/danilosimei/',
      },
      {
        name: 'Mike Greenspan',
        company: 'Auvik',
        image: '/mike.jpeg',
        text1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        text2: 'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.',
        linkedin: 'https://www.linkedin.com/in/michael-greenspan-devmanager/',
      },
      {
        name: 'Dan Pettit',
        company: 'Appcues',
        image: '/dan.jpeg',
        text1:  'As a highly skilled and experienced JavaScript developer, I highly recommend Kevin for any team looking for a talented and dedicated developer. Kevin has a deep understanding of the language and its various frameworks and libraries, and is able to create efficient, scalable, and maintainable code.',
        text2: 'Moreover, Kevin is an excellent team mate, always willing to collaborate and share their expertise to help the team succeed. They communicate clearly and effectively, listen to others’ ideas, and are always open to constructive feedback. Their positive attitude and strong work ethic make them a pleasure to work with and a valuable asset to any team.',
        linkedin: 'https://www.linkedin.com/in/dan-pettit-1b88384/',
      },
    ];

    return testmonials.map(({
      name,
      company,
      image,
      text1,
      text2,
      text3,
      linkedin,
    }, index: number) => (
      <Card
        key={`testimonial-card-${name}`}
        isSelected={selectedCard === index}
        position={[3.5 * (index - 1), -0.5, 0]}
        handleClick={(event: ThreeEvent<MouseEvent>) => handleSelectCard(event, index)}
        name={name}
        company={company}
        image={image}
        text1={text1}
        text2={text2}
        text3={text3}
        linkedin={linkedin}
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
    <Container id="testimonials" onClick={onContainerClick}>
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

        <TurtleShell />
        <Lights />
      </StyledCanvas>
    </Container>
  );
};
 
export default Testimonials;
