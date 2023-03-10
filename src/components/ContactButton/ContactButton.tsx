import Image from 'next/image';
import { AvatarBackground, StyledButton, Tooltip } from './styles';

interface ContactButtonProps {
  onClick: () => void;
}

const ContactButton = ({ onClick }: ContactButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <AvatarBackground>
        <Image src="/avatar.png" alt="Contact button" fill priority />

        <Tooltip>
          Let&apos;s have a chat
          <div className="emoji">
            <Image src="/downPointerEmoji.png" alt='Down pointer emoji' fill priority />
          </div>
        </Tooltip>
      </AvatarBackground>
    </StyledButton>
  );
};

export default ContactButton;
