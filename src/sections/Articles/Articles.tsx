import { RefObject } from 'react';
import { Physics } from '@react-three/rapier';
import { Container, MakeItRainButton, StyledCanvas, Title } from './Scenes/styles';
import Lights from './Scenes/Lights';
import Macbook from './Scenes/Macbook';
import Table from './Scenes/Table';

interface ArticleProps {
  coffeeBeans: JSX.Element[];
  addBeans: () => void;
  innerRef: RefObject<HTMLDivElement>;
}

const Articles = ({ coffeeBeans, addBeans, innerRef }: ArticleProps) => {
  return (
    <Container id="articles" ref={innerRef}>
      <Title>Articles</Title>

      <StyledCanvas camera={{ position: [0, 1, -3] }}>
        <Lights />

        <Physics>
          {coffeeBeans}

          <Macbook />

          <Table />
        </Physics>
      </StyledCanvas>

      <MakeItRainButton onClick={addBeans}>
        Make it rain
      </MakeItRainButton>
    </Container>
  );
};
 
export default Articles;
