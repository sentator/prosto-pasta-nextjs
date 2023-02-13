import { ReactNode } from "react";
import Footer from "../footer/Footer";

interface LayoutProps {
	children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div>header</div>
			{children}
			<Footer />
		</>
	);
};

export default Layout;
