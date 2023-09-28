import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import GlobalStyle, { theme } from '@/styles/GlobalStyle';
import { useEffect, useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  // https://stackoverflow.com/questions/75094010/nextjs-13-hydration-failed-because-the-initial-ui-does-not-match-what-was-render
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
