import styled from 'styled-components';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 50px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 20px;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h1`
  position: relative;

  span {
    position: absolute;
    left: 0;
    font-size: 10px;
    z-index: -1;
    opacity: 0;
  }
`;

export const LogoContainer = styled.div`
  width: 50px;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    transform: scale(0.9);
  }
`;

export const Logo = styled.img.attrs({
  src: '/logo.png',
  alt: 'logo',
})`
  width: 100%;
  height: 100%;
`;

export const SocialNetworkContainer = styled.div`
  ul {
    display: flex;
    gap: 20px;
    list-style-type: none;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
      flex-direction: column;

      svg {
        width: 40px;
        height: 40px;
      }
    }
  }

  svg {
    width: 50px;
    height: 50px;
  }

  svg, path {
    transition: fill 0.3s;
  }

  svg:hover {
    g, path {
      fill: var(--color-secondary);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    transform: scale(0.9);
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  flex: 1;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    margin-top: -50px;
  }
`;

export const Greeting = styled.h2`
  color: var(--color-white);
  font-size: 2rem;

  .name {
    color: var(--color-secondary);
  }

  .nowrap {
    white-space: nowrap;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1.7rem;
  }
`;

export const JobTitle = styled.h3`
  color: var(--color-white);
  font-weight: 400;
  font-style: italic;
  font-size: 2rem;
  white-space: nowrap;
  
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1.7rem;
  }
`;

export const Description = styled.p`
  color: var(--color-white);
  font-size: 1.4rem;
  max-width: 60%;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    font-size: 1rem;
  }
`;
