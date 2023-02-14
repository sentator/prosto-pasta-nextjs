import React from "react";

import { useMatchMedia } from "@/hooks/useMatchMedia";

interface ContextProps {
	children: React.ReactNode;
}

export const viewportWidthContext = React.createContext({ isMobile: false, isTablet: false, isDesktop: false });

const Context: React.FC<ContextProps> = ({ children }) => {
	const { isMobile, isTablet, isDesktop } = useMatchMedia();
	return (
		<viewportWidthContext.Provider
			value={{
				isMobile,
				isTablet,
				isDesktop,
			}}
		>
			{children}
		</viewportWidthContext.Provider>
	);
};

export default Context;
