import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';
import GlobalStyle, { theme } from '@/styles/GlobalStyle';

const App = ({ Component, pageProps }: AppProps) => {
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
