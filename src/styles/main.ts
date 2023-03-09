import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--color-primary);
  box-shadow: 0 0 0 calc(100vw - 1500px) var(--color-primary);
  
  max-width: 1728px; // Macbook Pro 16"
  margin: 0 auto;

  overflow: scroll;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  
  transition: background-color 0.3s, box-shadow 0.3s;
  
  section {
    scroll-snap-align: start;
  }
  
  &.first {
    background-color: var(--color-primary);
    box-shadow: 0 0 0 calc(100vw - 1500px) var(--color-primary);
  }
  
  &.second {
    background-color: var(--color-white);
    box-shadow: 0 0 0 calc(100vw - 1500px) var(--color-white);
  }

  section {
    scroll-snap-align: start;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1.7rem;
  }
`;
