import { PropsWithChildren, memo } from 'react';
import Button from './Button';

interface WrapperProps extends PropsWithChildren {
  onClick?: () => void;
  tag?: 'a' | 'button';
  href?: string;
  download?: boolean;
  pattern?: 'magenta' | 'blue';
  type?: 'submit' | 'button';
  target?: '_blank';
  isLoading?: boolean;
  disabled?: boolean;
}

const Wrapper = ({
  children,
  onClick = () => {},
  tag = 'button',
  href,
  download = false,
  pattern = 'magenta',
  type = 'button',
  target,
  isLoading = false,
  disabled = false,
}: WrapperProps) => {
  return (
    <Button
      href={href}
      onClick={onClick}
      tag={tag}
      download={download}
      pattern={pattern}
      type={type}
      target={target}
      isLoading={isLoading}
      disabled={disabled}
    >{children}</Button>
  );
};

export default memo(Wrapper);
