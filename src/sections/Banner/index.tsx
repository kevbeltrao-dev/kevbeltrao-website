import { memo, useState, RefObject, useCallback } from 'react';
import Banner from './Banner';
import { TopBarLinks } from './types';
import {
  DevToIcon,
  LinkedInIcon,
  GitHubIcon,
  YoutubeIcon,
  // InstagramIcon,
} from '@/icons';

const Wrapper = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setIsContactModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsContactModalOpen(false);
  }, []);

  const topBarLinks: TopBarLinks = [
    {
      Icon: DevToIcon,
      alt: 'dev.to',
      url: 'https://dev.to/kevbeltrao',
    },
    {
      Icon: LinkedInIcon,
      alt: 'linkedin',
      url: 'https://www.linkedin.com/in/kevbeltrao/',
    },
    {
      Icon: GitHubIcon,
      alt: 'Github',
      url: 'https://github.com/kevbeltrao',
    },
    {
      Icon: YoutubeIcon,
      alt: 'Youtube',
      url: 'https://www.youtube.com/@kevbeltrao',
    },
    // {
    //   Icon: InstagramIcon,
    //   alt: 'instagram',
    //   url: 'https://www.instagram.com/kevbeltrao/',
    // },
  ];
  return (
    <Banner
      topBarLinks={topBarLinks}
      isContactModalOpen={isContactModalOpen}
      openModal={openModal}
      closeModal={closeModal}
    />
  );
};

export default memo(Wrapper);
