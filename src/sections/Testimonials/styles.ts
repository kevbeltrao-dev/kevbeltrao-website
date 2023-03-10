import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
`;

export const StyledCanvas = styled(Canvas)`
  cursor: pointer;
`;
