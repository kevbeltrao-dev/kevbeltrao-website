import styled, { css, keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    transform: translateY(100%);
  } to {
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--backdrop-color);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-primary);

  transition: opacity 0.3s;

  &.hidden {
    opacity: 0;
    pointer-events: none;
    transform: translateY(100%);
  }

  &:not(.hidden) > .modal {
    animation: ${slideIn} 0.3s;
  }

  .error-message {
    color: var(--color-red);
    font-size: 0.9rem;
    position: absolute;
    bottom: 0;
    transform: translateY(70%);
  }

  .modal {
    width: 100%;
    max-width: 500px;
    background-color: var(--color-white);
    padding: 20px;
    border-radius: var(--border-radius);
    box-shadow: 0 0 0 1px var(--color-gray-200);
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  header {
    display: grid;
    place-items: center;
    position: relative;
  }
  
  h2 {
    font-size: 1.5rem;
  }

  form {
    display: grid;
    grid-template:
      'inputs textarea' auto
      'submit submit' auto / 1fr 1fr;
    grid-gap: 20px;
    
    div:first-child {
      grid-area: inputs;

      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    div:nth-child(2) {
      grid-area: textarea;
    }
    
    div:last-child {
      grid-area: submit;
      display: grid;
      place-items: center;

      button {
        width: 100%;
        margin-top: 20px;
      }
    }
  }


  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 0 20px;

    h2 {
      font-size: 1.5rem;
    }

    form {
      grid-template:
      'inputs' auto
      'textarea' auto
      'submit' auto;

      div:last-child button {
        margin-top: 0;
      }
    }
  }
`;

export const CloseButton = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;

  display: grid;
  place-items: center;

  position: absolute;
  right: 15px;
  top: 0;

  &::before, &::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    border-radius: 4px;
    background-color: var(--color-primary);
    position: absolute;
    transition: transform 0.3s;
  }

  &::before {
    transform: rotate(-45deg);
  }

  &::after {
    transform: rotate(45deg);
  }

  &:hover::before {
    transform: rotate(45deg);
  }
  
  &:hover::after {
    transform: rotate(-45deg);
  }
`;

const inputStyles = css`
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 2px solid;
  border-color: var(--lightest-blue);
  border-radius: var(--border-radius);
  color: var(--color-primary);
  background-color: var(--lightest-blue);
  outline: none;

  transition: border-color 0.3s;

  &:focus {
    border-color: var(--color-primary);
  }
`;

export const Input = styled.input`
  ${inputStyles}
`;

export const TextArea = styled.textarea`
  ${inputStyles}

  resize: none;
  height: 100%;
  min-height: 100px;
`;
