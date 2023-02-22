import React from "react";
import { scrollLockContext, fixedPositionCorrectionContext } from "./index";

export const cartVisibilityContext = React.createContext({
	isCartOpened: false,
	showCart: () => {},
	hideCart: () => {},
});

interface ContextProps {
	children: React.ReactNode;
}

const Context: React.FC<ContextProps> = ({ children }) => {
	const { enableCorrection, disableCorrection } = React.useContext(fixedPositionCorrectionContext);
	const { lockScroll, unlockScroll } = React.useContext(scrollLockContext);
	const [isCartOpened, setCartOpened] = React.useState<boolean>(false);

	const showCart = () => {
		setCartOpened(true);
		enableCorrection();
		lockScroll();
	};

	const hideCart = () => {
		setCartOpened(false);
		disableCorrection();
		unlockScroll();
	};
	return (
		<cartVisibilityContext.Provider value={{ isCartOpened, showCart, hideCart }}>
			{children}
		</cartVisibilityContext.Provider>
	);
};

export default Context;
