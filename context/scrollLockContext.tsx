import React from "react";

export const scrollLockContext = React.createContext({
	isScrollLocked: false,
	toggleScrollLock: () => {},
	lockScroll: () => {},
	unlockScroll: () => {},
	scrollbarWidth: 0,
});

interface ContextProps {
	children: React.ReactNode;
}

const Context: React.FC<ContextProps> = ({ children }) => {
	const [isScrollLocked, setScrollLocked] = React.useState<boolean>(false);
	const [scrollbarWidth, setScrollbarWidth] = React.useState<number>(0);

	React.useEffect(() => {
		getScrollbarWidth();
	}, []);

	const toggleScrollLock = () => {
		setScrollLocked((prevState) => {
			if (prevState) {
				document.body.style.overflowY = "scroll";
				document.body.style.paddingRight = "0px";
			} else {
				document.body.style.overflowY = "hidden";
				document.body.style.paddingRight = scrollbarWidth + "px";
			}
			return !prevState;
		});
	};

	const lockScroll = () => {
		setScrollLocked(true);
		document.body.style.overflowY = "hidden";
		document.body.style.paddingRight = scrollbarWidth + "px";
	};

	const unlockScroll = () => {
		setScrollLocked(false);
		document.body.style.overflowY = "scroll";
		document.body.style.paddingRight = "0px";
	};

	const getScrollbarWidth = () => {
		const div = document.createElement("div");
		div.style.cssText = `
            width: 50px;
            height: 50px;
            overflow-y: scroll;
            opacity: 0;
            visibility: hidden;
        `;
		document.body.append(div);

		const scrollbarWidth = div.offsetWidth - div.clientWidth;

		div.remove();

		setScrollbarWidth(scrollbarWidth);
	};

	return (
		<scrollLockContext.Provider
			value={{
				isScrollLocked,
				toggleScrollLock,
				lockScroll,
				unlockScroll,
				scrollbarWidth,
			}}
		>
			{children}
		</scrollLockContext.Provider>
	);
};

export default Context;
