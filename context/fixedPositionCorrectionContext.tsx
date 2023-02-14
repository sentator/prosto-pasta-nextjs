import React from "react";

export const fixedPositionCorrectionContext = React.createContext({
	correction: false,
	enableCorrection: () => {},
	disableCorrection: () => {},
});

interface ContextProps {
	children: React.ReactNode;
}

const Context: React.FC<ContextProps> = ({ children }) => {
	// values for fixedPositionCorrectionContext (aim - counting padding right for elements with the next positions: fixed & absolute)
	const [correction, setCorrection] = React.useState<boolean>(false);
	const enableCorrection = () => {
		setCorrection(true);
	};
	const disableCorrection = () => {
		setCorrection(false);
	};

	return (
		<fixedPositionCorrectionContext.Provider value={{ correction, enableCorrection, disableCorrection }}>
			{children}
		</fixedPositionCorrectionContext.Provider>
	);
};

export default Context;
