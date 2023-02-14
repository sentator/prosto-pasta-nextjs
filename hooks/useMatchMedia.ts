import React from "react";

const queries: readonly string[] = [
	"(max-width: 768px)",
	"(min-width: 769px) and (max-width: 992px)",
	"(min-width: 993px)",
];

interface IMatchMediaOutput {
	isMobile: boolean;
	isTablet: boolean;
	isDesktop: boolean;
}

export const useMatchMedia: () => IMatchMediaOutput = () => {
	const [isFirstRender, setFirstRender] = React.useState<boolean>(true);
	const [values, setValues] = React.useState<boolean[]>([false, false, false]);

	React.useEffect(() => {
		const mediaQueryLists = queries.map((query) => matchMedia(query));
		const getValues: () => boolean[] = () => mediaQueryLists.map((mql) => mql.matches);
		const handler: () => void = () => setValues(getValues);

		if (isFirstRender) {
			handler();
			setFirstRender(false);
		}

		mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler));

		return () => mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler));
	});

	return ["isMobile", "isTablet", "isDesktop"].reduce(
		(acc, screen, index) => ({
			...acc,
			[screen]: values[index],
		}),
		{}
	) as IMatchMediaOutput;
};
