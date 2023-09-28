import styled from 'styled-components';

export const Button = styled.button`
  width: 0; 
  height: 0; 
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  
  border-top: 20px solid var(--color-white);
  background-color: transparent;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
