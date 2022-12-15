import '../styles/globals.css';

import Head from 'next/head';
import { AppProps } from 'next/app';

import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />

    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </>;
}

export default MyApp;