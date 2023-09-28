import { FC } from 'react';
import { Container, WavesLoader } from './styles';

interface LoadingProps {
  id?: string;
}

const Loading: FC<LoadingProps> = ({ id }) => {
  return (
    <Container id={id}>
      <WavesLoader />
    </Container>
  );
};

export default Loading;
