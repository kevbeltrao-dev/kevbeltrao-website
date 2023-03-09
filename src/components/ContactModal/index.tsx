import { FormEvent, memo, useCallback, useState, FormEventHandler } from 'react';
import sendEmail from '@/services/email';
import ContactModal from './ContactModal';

interface WrapperProps {
  isOpen: boolean;
  closeModal: () => void;
}

type MethodOptions = 'setName' | 'setEmail' | 'setCompany' | 'setMessage';

const Wrapper = ({ isOpen, closeModal }: WrapperProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const updateFormValue = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name: fieldName, value: fieldValue } = event.currentTarget;

    const methods = { setName, setEmail, setCompany, setMessage };

    const method = `set${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1)}` as MethodOptions;

    methods[method](fieldValue);
  };

  const cleanFormValues = () => {
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setError('');
  };

  const onModalClose = useCallback(() => {
    setIsLoading(false);
    cleanFormValues();
    closeModal();
  }, [closeModal]);

  const onModalFail = useCallback((error: string) => {
    setIsLoading(false);
    setError(error);
  }, []);

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();
    setIsLoading(true);

    await sendEmail({ name, email, company, message }, onModalClose, onModalFail);
  }, [company, email, message, name, onModalClose, onModalFail]) as FormEventHandler<HTMLFormElement>;

  return (
    <ContactModal
      className={isOpen ? '' : 'hidden'}
      closeModal={onModalClose}
      isLoading={isLoading}
      handleSubmit={handleSubmit}
      updateFormValue={updateFormValue}
      name={name}
      email={email}
      company={company}
      message={message}
      error={error}
    />
  );
};

export default memo(Wrapper);
