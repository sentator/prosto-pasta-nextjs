import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { wrapper } from "@/redux/store";

import "@/styles/globals.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
// -------------- quick global styling instead of CSS module usage. REPLACE it to CSS modules soon
import "@/styles/temporaryCSSModulesReplacement.scss";
// ---------------------

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
	const { store, props } = wrapper.useWrappedStore(pageProps);
	return (
		<Provider store={store}>
			<FixedPositionCorrectionContextProvider>
				<ScrollLockContextProvider>
					<ViewportWidthContextProvider>
						<div className={myFont.className}>
							<Layout>
								<Component {...props.pageProps} />
							</Layout>
						</div>
					</ViewportWidthContextProvider>
				</ScrollLockContextProvider>
			</FixedPositionCorrectionContextProvider>
		</Provider>
	);
}
