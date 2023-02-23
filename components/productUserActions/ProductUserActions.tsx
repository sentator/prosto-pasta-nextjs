import React from "react";

import { IUseCounterProductData, IUseCounterOptions } from "../../hooks/useCounter";
import { useCounter } from "../../hooks";
import AddToCartButton from "../addToCartButton/AddToCartButton";

// import styles from "./productUserActions.module.scss";

interface ProductUserActionsProps {
	productData: IUseCounterProductData;
	productOptions?: IUseCounterOptions;
	isAddingToCart: boolean;
	setAddingToCart: React.Dispatch<React.SetStateAction<boolean>> | (() => void);
}

const ProductUserActions: React.FC<ProductUserActionsProps> = ({
	productData,
	productOptions,
	isAddingToCart,
	setAddingToCart,
}) => {
	const { isInCart, itemsInCart, onClickMinus, onClickPlus, handleAddToCart } = useCounter(
		productData,
		productOptions
	);

	return (
		<div className="user-actions">
			<div className="user-actions__counter">
				<button
					className="user-actions__counter-button"
					disabled={itemsInCart === 1 || isAddingToCart}
					onClick={onClickMinus}
				>
					-
				</button>
				<input
					className="user-actions__counter-input"
					type="text"
					readOnly
					value={itemsInCart}
					aria-label="products in cart"
					tabIndex={-1}
				/>
				<button
					className="user-actions__counter-button"
					disabled={itemsInCart >= 99 || isAddingToCart}
					onClick={onClickPlus}
				>
					&#43;
				</button>
			</div>
			<AddToCartButton
				className="user-actions__button"
				isInCart={isInCart}
				handleAddToCart={handleAddToCart}
				isAdding={isAddingToCart}
				setAdding={setAddingToCart}
			/>
		</div>
	);
};

export default ProductUserActions;
