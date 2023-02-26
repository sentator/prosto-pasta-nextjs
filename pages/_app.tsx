import localFont from "@next/font/local";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { wrapper } from "@/redux/store";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "overlayscrollbars/overlayscrollbars.css";
import "@/styles/globals.scss";
// -------------- quick global styling instead of CSS module usage. REPLACE it to CSS modules soon
import "@/styles/temporaryCSSModulesReplacement.scss";
// ---------------------

import {
	FixedPositionCorrectionContextProvider,
	ScrollLockContextProvider,
	ViewportWidthContextProvider,
	CartVisibilityContextProvider,
} from "../context";
import Layout from "../components/layout/Layout";

export const myFont = localFont({
	src: "../public/fonts/Neucha.woff2",
	// variable: "--font-family"
	display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(pageProps);
	return (
		<Provider store={store}>
			<FixedPositionCorrectionContextProvider>
				<ScrollLockContextProvider>
					<ViewportWidthContextProvider>
						<CartVisibilityContextProvider>
							<div className={myFont.className}>
								<Layout>
									<Component {...props.pageProps} />
								</Layout>
							</div>
						</CartVisibilityContextProvider>
					</ViewportWidthContextProvider>
				</ScrollLockContextProvider>
			</FixedPositionCorrectionContextProvider>
		</Provider>
	);
}
