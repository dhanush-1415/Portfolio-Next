import { useEffect } from 'react';
import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import { ColorModeContextProvider } from '../contexts/ColorModeContext';
import '../styles/globals.css';

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createEmotionCache();

export default function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }) {
  useEffect(() => {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Professional Next.js App with MUI</title>
        <meta name="description" content="A professional Next.js application with Material UI featuring custom color palette and smooth navigation" />
      </Head>
      <ColorModeContextProvider>
        <Component {...pageProps} />
      </ColorModeContextProvider>
    </CacheProvider>
  );
}
