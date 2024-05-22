import styled from 'styled-components';

export const Main = styled.main`
  background-color: var(--color-primary);
  box-shadow: 0 0 0 calc(100vw - 1500px) var(--color-primary);
  
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100vh;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;
  
  transition: background-color 0.3s, box-shadow 0.3s;
  
  section {
    scroll-snap-align: start;
  }
  
  &.first {
    background-color: var(--color-primary);
  }
  
  &.second {
    background-color: #E3E3FF;
    background-color: var(--color-lightblue);
  }

  &.third {
    background-color: var(--color-secondary);
  }

  section {
    scroll-snap-align: start;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1.7rem;
  }
`;
