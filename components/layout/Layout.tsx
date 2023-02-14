import React from "react";
import { useInView } from "react-intersection-observer";
import classnames from "clsx";

import { viewportWidthContext } from "@/context";

import Header from "../header/Header";
import Footer from "../footer/Footer";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const { isDesktop } = React.useContext(viewportWidthContext);
	const { ref, inView } = useInView({
		threshold: 1,
		initialInView: true,
	});

	// --------
	const isCartOpened = false;
	// --------
	const mainTagClassNames = classnames("main", { blured: isCartOpened });

	return (
		<>
			<Header isLarge={inView} isDesktop={isDesktop} />
			<div className="wrapper">
				<div className={mainTagClassNames} data-offset={inView}>
					{/* trigger element for the intersection observer instance (connected with the Header) */}
					<div className="main__trigger" ref={ref} aria-hidden="true"></div>
					{children}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
