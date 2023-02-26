import React from "react";

import { Options, OverlayScrollbars } from "overlayscrollbars";

const config: Partial<Options> = {
	overflow: {
		x: "hidden",
		y: "scroll",
	},
};

const useScrollbar = (root: React.RefObject<HTMLDivElement>, hasScroll: boolean) => {
	const [reachedEnd, setReachedEnd] = React.useState<boolean>(false);

	const resetReachEnd = () => {
		setReachedEnd(false);
	};

	React.useEffect(() => {
		let scrollbars: OverlayScrollbars;

		if (root.current && hasScroll) {
			// scrollbars = OverlayScrollbars(root.current, config);

			scrollbars = OverlayScrollbars(root.current, config, {
				scroll(instance, event) {
					const overflowYAmount = instance.state().overflowAmount.y;
					const { scrollTop } = instance.elements().viewport;

					if (scrollTop === overflowYAmount) {
						setReachedEnd(true);
					} else {
						setReachedEnd(false);
					}
				},
			});
		}

		return () => {
			if (scrollbars) {
				scrollbars.destroy();
			}
		};
	}, [root, hasScroll]);

	return {
		reachedEnd,
		resetReachEnd,
	};
};

export { useScrollbar };
