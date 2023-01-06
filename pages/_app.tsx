import "../styles/globals.css";

import Head from "next/head";
import { AppProps } from "next/app";

import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<link rel="icon" href="/assets/logo_mono.png" />
			</Head>

			<Component {...pageProps} />

			<Toaster position="top-center" reverseOrder={false} />
		</>
	);
}

export default MyApp;
