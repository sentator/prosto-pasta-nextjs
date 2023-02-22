import { RootState } from "../redux/store";

export const calcCartTotalPrice = (state: RootState["cart"]): void => {
	state.totalPrice = state.items.reduce((total, item) => {
		total += item.quantity * item.price;
		return total;
	}, 0);
};
