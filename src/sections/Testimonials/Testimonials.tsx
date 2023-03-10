import { ThreeEvent } from '@react-three/fiber';
import { useCallback, useMemo, useState } from 'react';
import Card from './scenes/Card';
import Lights from './scenes/Lights';
import { Container, StyledCanvas } from './styles';

const Testimonials = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const handleSelectCard = useCallback((event: ThreeEvent<MouseEvent>, index: number) => {
    event.stopPropagation();

    if (selectedCard === index) {
      return setSelectedCard(null);
    }

    setSelectedCard(index);
  }, [selectedCard]);

  const cards = useMemo(() => [...new Array(3)].map((_, index) => (
    <Card
      key={`testimonial-card-${index}`}
      isSelected={selectedCard === index}
      position={[3 * (index - 1), 0, 0]}
      handleClick={(event: ThreeEvent<MouseEvent>) => handleSelectCard(event, index)}
    />
  )), [handleSelectCard, selectedCard]);

  return (
    <Container>
      <StyledCanvas>
        {cards}
        <Lights />
      </StyledCanvas>
    </Container>
  );
};
 
export default Testimonials;
