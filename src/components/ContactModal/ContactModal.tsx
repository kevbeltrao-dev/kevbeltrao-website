import { FormEventHandler, MouseEvent, useRef, FormEvent } from 'react';
import Button from '../Button';
import { Container, CloseButton, Input, TextArea } from './styles';

interface ContactModalProps {
  className: string;
  closeModal: () => void;
  isLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement>;
  updateFormValue: (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name: string;
  email: string;
  company: string;
  message: string;
  error: string;
}

const ContactModal = ({
  className,
  closeModal,
  isLoading,
  handleSubmit,
  updateFormValue,
  name,
  email,
  company,
  message,
  error,
}: ContactModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current!.contains(event.target as Node)) {
      return;
    }

    closeModal();
  };

  return (
    <Container onClick={handleClickOutside} className={className}>
      <div ref={modalRef} className="modal">
        <header>
          <h2>Contact</h2>

          <CloseButton onClick={closeModal}/>

          {error && <span className="error-message">{error}</span>}
        </header>

        <form onSubmit={handleSubmit}>
          <div>
            <Input
              type="text"
              required
              name="name"
              placeholder="name*"
              value={name}
              onChange={updateFormValue}
            />

            <Input
              type="email"
              required
              name="email"
              placeholder="email*"
              value={email}
              onChange={updateFormValue}
            />

            <Input
              type="text"
              name="company"
              placeholder="company"
              value={company}
              onChange={updateFormValue}
            />
          </div>

          <div>
            <TextArea
              required
              name="message"
              placeholder="message*"
              value={message}
              onChange={updateFormValue}
            />
          </div>

          <div>
            <Button
              pattern="blue"
              type="submit"
              isLoading={isLoading}
              disabled={isLoading}
            >Submit</Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default ContactModal;
