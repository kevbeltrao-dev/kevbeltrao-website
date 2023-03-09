import ContactButton from './ContactButton';

interface WrapperProps {
  onClick: () => void;
}

const Wrapper = ({ onClick }: WrapperProps) => {
  return (
    <ContactButton onClick={onClick} />
  );
};

export default Wrapper;
