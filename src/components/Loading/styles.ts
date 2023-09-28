import styled, { keyframes } from 'styled-components';

const waves = keyframes`
  0% {
    transform: scale(0);
  } 50% {
    transform:scale(1);
    opacity: 1;
  } 100% {
    transform:scale(1.8);
    opacity: 0;
  }
`;

export const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`;

export const WavesLoader = styled.div`
  width: 100px;
  height: 100px;
  background-color: transparent;
  position: relative;
  overflow: visible;

  &:before,
  &:after {
    content:'';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    border-radius: 50%;
    border: 2px solid var(--color-secondary);
    box-shadow: 0 0 5px 0 var(--color-secondary);
    animation: ${waves} 2s linear infinite;
  }

  &:after {
    animation-delay: 1s;
  }
`;
