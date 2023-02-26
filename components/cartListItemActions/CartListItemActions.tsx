import React from "react";

// import styles from "./cartListItemActions.module.scss";

import { IUseCounterProductData } from "../../hooks/useCounter";
import { useAppDispatch, useCounter } from "../../hooks";
import { removeProduct } from "../../redux/slices/cart";

interface CartListItemActionsProps {
	productData: IUseCounterProductData;
}

const CartListItemActions: React.FC<CartListItemActionsProps> = ({ productData }) => {
	const { itemsInCart, onClickMinus, onClickPlus } = useCounter(productData);
	const dispatch = useAppDispatch();

	const handleRemove = () => {
		dispatch(removeProduct(productData.id));
	};

	return (
		<div className="cart-item-actions">
			<div className="cart-item-actions__counter">
				<button
					className="cart-item-actions__counter-button"
					disabled={itemsInCart === 1}
					onClick={onClickMinus}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_2136_2112)">
							<path d="M5 11H19V13H5V11Z" fill="currentColor" />
						</g>
						<defs>
							<clipPath id="clip0_2136_2112">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
				<input
					className="cart-item-actions__counter-input"
					type="text"
					readOnly
					value={itemsInCart}
					aria-label="products in cart"
					tabIndex={-1}
				/>
				<button
					className="cart-item-actions__counter-button"
					disabled={itemsInCart >= 99}
					onClick={onClickPlus}
				>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_2136_2116)">
							<path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="currentColor" />
						</g>
						<defs>
							<clipPath id="clip0_2136_2116">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
			<button className="cart-item-actions__btn-remove" onClick={handleRemove}>
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g clipPath="url(#clip0_2136_2120)">
						<path
							d="M17 6H22V8H20V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H5C4.73478 22 4.48043 21.8946 4.29289 21.7071C4.10536 21.5196 4 21.2652 4 21V8H2V6H7V3C7 2.73478 7.10536 2.48043 7.29289 2.29289C7.48043 2.10536 7.73478 2 8 2H16C16.2652 2 16.5196 2.10536 16.7071 2.29289C16.8946 2.48043 17 2.73478 17 3V6ZM18 8H6V20H18V8ZM13.414 14L15.182 15.768L13.768 17.182L12 15.414L10.232 17.182L8.818 15.768L10.586 14L8.818 12.232L10.232 10.818L12 12.586L13.768 10.818L15.182 12.232L13.414 14ZM9 4V6H15V4H9Z"
							fill="currentColor"
						/>
					</g>
					<defs>
						<clipPath id="clip0_2136_2120">
							<rect width="24" height="24" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	);
};

export default CartListItemActions;
