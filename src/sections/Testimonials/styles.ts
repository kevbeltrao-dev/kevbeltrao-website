import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  cursor: pointer;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledCanvas = styled(Canvas)`
`;

export const TitleContainer = styled.div`
  position: absolute;
  top: 15vh;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;

export const Title = styled.h2`
  color: var(--color-primary);
  text-transform: uppercase;
  font-size: 5rem;
  font-weight: 600;
`;

export const Subtitle = styled.h3`
  color: var(--color-primary);
`;
