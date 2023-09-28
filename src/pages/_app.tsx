import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import GlobalStyle, { theme } from '@/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
  const isSSR = typeof window === 'undefined';
  if (isSSR) return <></>;

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
