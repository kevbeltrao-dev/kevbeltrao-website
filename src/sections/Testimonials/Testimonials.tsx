import { ThreeEvent } from '@react-three/fiber';
import { useCallback, useMemo, useState } from 'react';
import Card from './scenes/Card';
import Lights from './scenes/Lights';
import {
  Container,
  StyledCanvas,
  TitleContainer,
  Title,
  Subtitle,
} from './styles';

const Testimonials = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

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

  return (
    <Container>
      <TitleContainer>
        <Title>Testimonials</Title>
        <Subtitle>from my past managers</Subtitle>
      </TitleContainer>

      <StyledCanvas frameloop="always">
        {cards}
        <Lights />
      </StyledCanvas>
    </Container>
  );
};
 
export default Testimonials;
