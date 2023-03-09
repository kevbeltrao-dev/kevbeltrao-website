import { PropsWithChildren, useMemo } from 'react';
import { StytledButton, StyledAnchor, Loading } from './styles';

interface ButtonProps extends PropsWithChildren {
  onClick: () => void;
  tag: 'a' | 'button';
  href?: string;
  download: boolean;
  pattern: 'magenta' | 'blue';
  type: 'submit' | 'button';
  target?: '_blank';
  isLoading: boolean;
  disabled: boolean;
}

const Button = ({
  children,
  onClick,
  tag,
  href,
  download,
  pattern,
  type,
  isLoading,
  disabled,
}: ButtonProps) => {
  // const content = useMemo(() => (isLoading ? <Loading /> : children), [isLoading, children]);

  if (tag === 'button') {
    return (
      <StytledButton
        pattern={pattern}
        type={type}
        onClick={onClick}
        disabled={disabled}
      >
        {isLoading && <Loading />}
        {children}
      </StytledButton>
    );
  }

  if (tag === 'a') {
    return (
      <StyledAnchor
        download={download}
        href={href}
        pattern={pattern}
        target="_blank"
      >
        {isLoading && <Loading />}
        {children}
      </StyledAnchor>
    );
  }

  return null;
};

export default Button;
