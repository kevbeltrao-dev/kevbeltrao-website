import { useState, useMemo, useCallback } from 'react';
import Head from 'next/head';
import { Globals } from '@react-spring/three';
import { Main } from '../styles/main';
import useScroll from '@/hooks/useScroll';
import Banner from '@/sections/Banner';
import Articles from '@/sections/Articles';
import Testimonials from '@/sections/Testimonials/Testimonials';

Globals.assign({
  frameLoop: 'always',
});

console.warn = () => {};

const Home = () => {
  const [main, setMain] = useState<HTMLDivElement | null>(null);
  const scroll = useScroll(main);

  const mainRef = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setMain(node);
    }
  }, []);

  const backgroundClass = useMemo(() => {
    if (typeof window === 'undefined') return '';
    
    const { innerHeight: screenHeight } = window;
    
    const sectionInScreen = Math.ceil((2 * scroll - screenHeight) / (2 * screenHeight));

    const sectionsClassNames = ['first', 'second', 'third'];

    return sectionsClassNames[sectionInScreen];
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
        <Banner />
        <Articles />
        <Testimonials />
      </Main>
    </>
  );
};

export default Home;
