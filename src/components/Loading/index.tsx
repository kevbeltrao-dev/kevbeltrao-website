import { memo } from 'react';
import Loading from './Loading';

interface WrapperProps {
  id?: string;
}

const Wrapper = ({ id }: WrapperProps) => {
  return (
    <Loading id={id} />
  );
};

export default memo(Wrapper);
