import styled, { css, keyframes } from 'styled-components';
import { Canvas } from '@react-three/fiber';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  @media (max-width: 900px) {
    display: none;
  }
`;

export const StyledCanvas = styled(Canvas)`
  z-index: 0;
  aspect-ratio: 1;
`;

export const Title = styled.h2`
  position: absolute;
  top: 20px;
  left: 60px;
  color: #000;
  font-size: 4rem;
  font-weight: 600;
  z-index: 1;
`;

export const MakeItRainButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  transform: translateX(-50%);

  color: #fff;
  background-color: #000;
  opacity: 0.6;

  border: 0;
  border-radius: 4;
  font-size: 18;
  cursor: pointer;

  width: fit-content;
  aspect-ratio: 1;
  border-radius: 50%;
  padding: 20px;

  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const Arrow = styled.button`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  position: absolute;
  top: 50%;
  width: 20px;
  height: 20px;
  background-color: transparent;
  cursor: pointer;

  ${({ left }: { left?: boolean }) => (
    left
      ? css`
        transform: translateY(-50%) rotate(135deg);
        left: 30px;
      ` : css`
        transform: translateY(-50%) rotate(-45deg);
        right: 30px;
      `
  )}
`;

export const OpenArticle = styled.button`
  background-color: #000;
  border: 0;
  padding: 5px 10px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
`;

const spin = keyframes`
  0% {
      transform: rotate(0deg);
  }
  100% {
      transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  width: 80px;
  height: 80px;

  border: 10px solid #000;
  border-bottom-color: transparent;
  border-radius: 50%;

  display: inline-block;
  box-sizing: border-box;
  animation: ${spin} 1s linear infinite;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
