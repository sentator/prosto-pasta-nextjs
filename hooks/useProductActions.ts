import React from "react";

import { RootState } from "../redux/store";
import { IProduct, ProductSizes, CrunchVariants } from "../types";
import { IUseCounterOptions } from "./useCounter";
import { updateProductProperty } from "../redux/slices/cart";
import { useGetProductsQuery } from "../services/mockApi";
import { createSelector } from "@reduxjs/toolkit";
import { useAppSelector, useAppDispatch } from "./redux";

const useProductActions = (id: IProduct["id"]) => {
	const { productData } = useGetProductsQuery(
		{},
		{
			selectFromResult: ({ data }) => ({
				productData: data?.find((product) => product.id === id),
			}),
		}
	);

	const dispatch = useAppDispatch();

	const selectCartItemById = createSelector(
		(state: RootState) => state.cart.items,
		(items) => items.find((item) => item?.id === id)
	);
	const cartItemData = useAppSelector(selectCartItemById);

	// Local option states is used while the products is not added to the Cart
	const [doubleFillingLocal, setDoubleFillingLocal] = React.useState<boolean>(false);
	const [sizeLocal, setSizeLocal] = React.useState<ProductSizes>(ProductSizes.small);
	const [crunchLocal, setCrunchLocal] = React.useState<CrunchVariants>(CrunchVariants.default);
	const [oldPriceLocal, setOldPriceLocal] = React.useState<number | null>(null);
	const [currentPriceLocal, setCurrentPriceLocal] = React.useState<number>(0);

	const doubleFilling: boolean = cartItemData ? cartItemData.doubleFilling : doubleFillingLocal;
	const size: ProductSizes = cartItemData ? cartItemData.size : sizeLocal;
	const crunch: CrunchVariants = cartItemData ? cartItemData.crunch : crunchLocal;
	const currentPrice: number = cartItemData ? cartItemData.price : currentPriceLocal;

	const getPrices = (
		productData: IProduct | undefined,
		{ doubleFilling, size, crunch }: IUseCounterOptions
	): { priceOld: number | null; priceCurrent: number } => {
		if (productData) {
			const { prices_old, prices_current } = productData;
			const priceOld = prices_old?.[size][crunch][doubleFilling ? "doubleFilling" : "default"] ?? null;
			const priceCurrent = prices_current[size][crunch][doubleFilling ? "doubleFilling" : "default"];

			return {
				priceOld,
				priceCurrent,
			};
		}
		return { priceOld: null, priceCurrent: 0 };
	};

	React.useEffect(() => {
		const { priceOld, priceCurrent } = getPrices(productData, { doubleFilling, size, crunch });

		setOldPriceLocal(priceOld);
		setCurrentPriceLocal(priceCurrent);
	}, [productData]);

	const handleChangeDoubleFilling = () => {
		const options: IUseCounterOptions = {
			doubleFilling: !doubleFilling,
			size,
			crunch,
		};
		const { priceOld, priceCurrent } = getPrices(productData, options);

		if (cartItemData) {
			dispatch(updateProductProperty({ id, doubleFilling: !doubleFilling, price: priceCurrent }));
		} else {
			setDoubleFillingLocal((state) => !state);
			setCurrentPriceLocal(priceCurrent);
		}

		setOldPriceLocal(priceOld);
	};

	const handleChangeSize = (value: ProductSizes) => {
		const options: IUseCounterOptions = {
			doubleFilling,
			size: value,
			crunch,
		};
		const { priceOld, priceCurrent } = getPrices(productData, options);

		if (cartItemData) {
			dispatch(updateProductProperty({ id, size: value, price: priceCurrent }));
		} else {
			setSizeLocal(value);
			setCurrentPriceLocal(priceCurrent);
		}

		setOldPriceLocal(priceOld);
	};

	const handleChangeCrunch = (value: CrunchVariants) => {
		const options: IUseCounterOptions = {
			doubleFilling,
			size,
			crunch: value,
		};
		const { priceOld, priceCurrent } = getPrices(productData, options);

		if (cartItemData) {
			dispatch(updateProductProperty({ id, crunch: value, price: priceCurrent }));
		} else {
			setCrunchLocal(value);
			setCurrentPriceLocal(priceCurrent);
		}

		setOldPriceLocal(priceOld);
	};

	const resetLocalActionsToDefault = () => {
		setDoubleFillingLocal(false);
		setSizeLocal(ProductSizes.small);
		setCrunchLocal(CrunchVariants.default);
	};

	return {
		doubleFilling,
		size,
		crunch,
		priceOld: oldPriceLocal,
		priceCurrent: currentPrice,
		handleChangeDoubleFilling,
		handleChangeSize,
		handleChangeCrunch,
		getPrices,
		resetLocalActionsToDefault,
	};
};

export default useProductActions;
