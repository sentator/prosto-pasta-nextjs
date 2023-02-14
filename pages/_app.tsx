import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

import {
	FixedPositionCorrectionContextProvider,
	ScrollLockContextProvider,
	ViewportWidthContextProvider,
} from "../context";
import Layout from "../components/layout/Layout";

export const myFont = localFont({
	src: "../public/fonts/Neucha.woff2",
	// variable: "--font-family"
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<FixedPositionCorrectionContextProvider>
			<ScrollLockContextProvider>
				<ViewportWidthContextProvider>
					<div className={myFont.className}>
						<Layout>
							<Component {...pageProps} />
						</Layout>
					</div>
				</ViewportWidthContextProvider>
			</ScrollLockContextProvider>
		</FixedPositionCorrectionContextProvider>
	);
}
