import {
  AvatarBackground,
  StyledButton,
  Tooltip,
  AvatarImage,
  EmojiPointingDown,
} from './styles';

interface ContactButtonProps {
  onClick: () => void;
}

const ContactButton = ({ onClick }: ContactButtonProps) => {
  return (
    <StyledButton onClick={onClick}>
      <AvatarBackground>
        <AvatarImage />

        <Tooltip>
          Let&apos;s have a chat
          <div className="emoji">
            <EmojiPointingDown />
          </div>
        </Tooltip>
      </AvatarBackground>
    </StyledButton>
  );
};

export default ContactButton;
