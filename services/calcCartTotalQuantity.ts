import { RootState } from "../redux/store";

export const calcCartTotalQuantity = (state: RootState["cart"]): void => {
	state.totalQuantity = state.items.length;
};
