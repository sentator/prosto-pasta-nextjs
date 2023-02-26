import React from "react";
import { useInView } from "react-intersection-observer";
import classnames from "clsx";

import { viewportWidthContext, cartVisibilityContext } from "@/context";

import Header from "../header/Header";
import Footer from "../footer/Footer";
import CartDrawer from "../cartDrawer/CartDrawer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { isDesktop } = React.useContext(viewportWidthContext);
	const { ref, inView } = useInView({
		threshold: 1,
		initialInView: true,
	});
	const { isCartOpened, hideCart } = React.useContext(cartVisibilityContext);

	const mainTagClassNames = classnames("main", { blured: isCartOpened });

	return (
		<>
			<div className="wrapper">
				<Header isLarge={inView} isDesktop={isDesktop} />
				<div className={mainTagClassNames} data-offset={inView}>
					{/* trigger element for the intersection observer instance (connected with the Header) */}
					<div className="main__trigger" ref={ref} aria-hidden="true"></div>
					{children}
				</div>
				<Footer />
				<CartDrawer isOpened={isCartOpened} onClose={hideCart} />
			</div>
		</>
	);
};

export default Layout;
