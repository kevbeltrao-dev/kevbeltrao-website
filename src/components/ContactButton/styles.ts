import styled, { keyframes } from 'styled-components';

const waves = keyframes`
  0% {
    transform:scale(1);
  } 50% {
    transform:scale(1.4);
    opacity:1;
  } 100% {
    transform:scale(1.8);
    opacity:0;
  }
`;

export const StyledButton = styled.button`
  position: absolute;
  right: 100px;
  bottom: 100px;

  width: 130px;
  height: 130px;
  overflow: visible;

  background-color: var(--color-secondary);
  border: 0;
  border-radius: 50%;

  display: grid;
  place-items: center;

  transition: transform 0.3s;

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

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 70px;
    height: 70px;
    right: 50px;
    bottom: 40px;
  }
`;

export const AvatarBackground = styled.div`
  border-radius: 50%;

  width: 140%;
  height: 140%;
  
  position: relative;
  z-index: 1;
`;

export const AvatarImage = styled.img.attrs({
  src: '/avatar.png',
  alt: 'Contact button',
})`
  width: 100%;
  aspect-ratio: 1;
`;

export const Tooltip = styled.div`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  
  background-color: var(--color-white);
  border-radius: 5px;
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  display: flex;
  gap: 10px;

  .emoji {
    --width: 1rem;
    --ratio: calc(160 / 105);
    width: var(--width);
    padding: 0;
    position: relative;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(100%);

    border: 10px solid transparent;
    border-top-color: var(--color-white);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 0.8rem;
    left: 40%;

    .emoji {
      --width: 0.8rem;
    }
  }
`;

export const EmojiPointingDown = styled.img.attrs({
  src: '/downPointerEmoji.png',
  alt: 'Emoji pointing down',
})`
  width: 100%;
  height: 100%;
`;
