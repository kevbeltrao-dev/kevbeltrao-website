import { useMemo, useRef } from 'react';
import Head from 'next/head';
import { Main } from '../styles/main';
import useScroll from '@/hooks/useScroll';
import Banner from '@/sections/Banner';
import Articles from '@/sections/Articles';

const Home = () => {
  const mainRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const scroll = useScroll(mainRef.current);
  
  const backgroundClass = useMemo(() => {
    if (typeof window === 'undefined') return '';

    if (scroll < window.innerHeight / 2) {
      return 'first';
    }

    return 'second';
  }, [scroll]);

  return (
    <>
      <Head>
        <title>KevBeltrao</title>
        <meta name="description" content="KevBeltrao landing page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>
      </Head>

      <Main className={backgroundClass} ref={mainRef}>
        <Banner innerRef={bannerRef} />
        <Articles innerRef={articlesRef} />
      </Main>
    </>
  );
};

export default Home;
