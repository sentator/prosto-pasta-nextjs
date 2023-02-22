import React from "react";
import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../redux/store";
import { IProduct, CrunchVariants, ProductSizes } from "../types";
import { useAppSelector, useAppDispatch } from "./redux";
import { updateProductProperty, addProduct } from "../redux/slices/cart";

export interface IUseCounterProductData extends Pick<IProduct, "id" | "title" | "image"> {
	price: number;
}

export interface IUseCounterOptions {
	doubleFilling: boolean;
	size: ProductSizes;
	crunch: CrunchVariants;
}

const defaultOptions = {
	doubleFilling: false,
	size: ProductSizes.small,
	crunch: CrunchVariants.default,
};

const useCounter = (
	{ id, title, image, price }: IUseCounterProductData,
	{ doubleFilling, size, crunch }: IUseCounterOptions = defaultOptions
) => {
	const quantitySelector = createSelector(
		(state: RootState) => state.cart.items,
		(items) => items.find((product) => product.id === id)?.quantity
	);
	const quantityInCart = useAppSelector(quantitySelector);

	// Local counter state, which is used while item is not added to the Cart
	const [itemsInCart, setItemsInCart] = React.useState<number>(1);

	const dispatch = useAppDispatch();

	const onClickPlus = () => {
		if (quantityInCart) {
			dispatch(updateProductProperty({ id, quantity: quantityInCart + 1, price }));
		} else {
			setItemsInCart((prev) => prev + 1);
		}
	};

	const onClickMinus = () => {
		if (quantityInCart) {
			dispatch(updateProductProperty({ id, quantity: quantityInCart - 1, price }));
		} else {
			setItemsInCart((prev) => prev - 1);
		}
	};

	const handleAddToCart = () => {
		dispatch(
			addProduct({
				id,
				title,
				image,
				size,
				crunch,
				quantity: itemsInCart,
				price,
				doubleFilling,
			})
		);
	};

	return {
		isInCart: !!quantityInCart,
		itemsInCart: !!quantityInCart ? quantityInCart : itemsInCart,
		onClickMinus,
		onClickPlus,
		handleAddToCart,
	};
};

export default useCounter;
