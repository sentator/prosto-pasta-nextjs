import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

import Layout from "../components/layout/Layout";

const myFont = localFont({ src: "../public/fonts/Neucha.woff2" });

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={myFont.className}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</main>
	);
}
