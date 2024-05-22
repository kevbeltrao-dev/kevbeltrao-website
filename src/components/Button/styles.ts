import styled, { css, keyframes } from 'styled-components';

const patterns = {
  blue: css`
    background-color: var(--color-primary);
  `,
  magenta: css`
    background-color: var(--color-secondary);
  `,
};

type Pattern = 'blue' | 'magenta';
type ButtonType = 'button' | 'submit';

interface ButtonStyleProps {
  pattern: Pattern;
  type?: ButtonType;
}

const sharedStyles = css<ButtonStyleProps>`
  ${({ pattern }) => patterns[pattern]};
  color: var(--color-white);
  font-size: 1.2rem;
  white-space: nowrap;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 8px 24px;
  width: fit-content;
  border-radius: var(--border-radius);

  &:disabled {
    opacity: 0.6;
  }
  
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 0.9rem;
    padding: 8px 20px;
  }

  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.2);
  }
`;

export const StytledButton = styled.button<ButtonStyleProps>`
  ${sharedStyles}
`;

export const StyledAnchor = styled.a<ButtonStyleProps>`
  ${sharedStyles}
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
  width: 20px;
  height: 20px;

  border: 3px solid var(--color-white);
  border-bottom-color: transparent;
  border-radius: 50%;

  display: inline-block;
  box-sizing: border-box;
  animation: ${spin} 1s linear infinite;
`;
