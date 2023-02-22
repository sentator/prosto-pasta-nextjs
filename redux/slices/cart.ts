import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { HYDRATE } from "next-redux-wrapper";

import { ProductSizes } from "../../types/ProductSizes";
import { CrunchVariants } from "../../types/CrunchVariants";
import { calcCartTotalPrice, calcCartTotalQuantity } from "../../services";

export interface CartItem {
	id: string;
	title: string;
	image: { src: string; webp: string };
	size: ProductSizes;
	doubleFilling: boolean;
	crunch: CrunchVariants;
	quantity: number;
	price: number;
}
interface CartState {
	items: CartItem[];
	totalQuantity: number;
	totalPrice: number;
}

const initialState: CartState = {
	items: [],
	totalQuantity: 0,
	totalPrice: 0,
};

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addProduct(state, action: PayloadAction<CartItem>) {
			state.items.push(action.payload);
			calcCartTotalPrice(state);
			calcCartTotalQuantity(state);
		},
		removeProduct(state, action: PayloadAction<CartItem["id"]>) {
			state.items = state.items.filter((item) => item.id !== action.payload);
			calcCartTotalPrice(state);
			calcCartTotalQuantity(state);
		},
		updateProductProperty(
			state,
			action: PayloadAction<
				Pick<CartItem, "id" | "price"> & Partial<Omit<CartItem, "id" | "title" | "image" | "price">>
			>
		) {
			state.items = state.items.map((item) => {
				if (item.id === action.payload.id) {
					if (Object.hasOwn(action.payload, "doubleFilling")) {
						return {
							...item,
							doubleFilling: action.payload.doubleFilling as boolean,
							price: action.payload.price,
						};
					}

					if (action.payload.size) {
						return { ...item, size: action.payload.size, price: action.payload.price };
					}

					if (action.payload.crunch) {
						return { ...item, crunch: action.payload.crunch, price: action.payload.price };
					}

					if (action.payload.quantity) {
						return { ...item, quantity: action.payload.quantity, price: action.payload.price };
					}

					if (action.payload.price) {
						return { ...item, price: action.payload.price };
					}

					return item;
				}

				return item;
			});
			calcCartTotalPrice(state);
			calcCartTotalQuantity(state);
		},
	},
	// extraReducers: {
	// 	[HYDRATE]: (state, action) => {
	// 		console.log("HYDRATE", state, action.payload);
	// 		return {
	// 			...state,
	// 			...action.payload.subject,
	// 		};
	// 	},
	// },
});

export const { addProduct, removeProduct, updateProductProperty } = cartSlice.actions;

export default cartSlice.reducer;
