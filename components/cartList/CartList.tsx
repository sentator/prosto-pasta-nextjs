import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { CartItem } from "../../redux/slices/cart";
import CartListItem from "../cartListItem/CartListItem";

// import styles from "./cartList.module.scss";

interface CartListProps {
	products: CartItem[];
	handleCloseDrawer: () => void;
}

const CartList: React.FC<CartListProps> = ({ products, handleCloseDrawer }) => {
	return (
		<div className="cart-list">
			<TransitionGroup className="cart-list__list" component="ul">
				{products.map((cartItem) => (
					<CSSTransition
						key={cartItem.id}
						classNames="cartItemTransition"
						timeout={500}
						mountOnEnter
						unmountOnExit
						appear
					>
						<li className="cart-list__item">
							<CartListItem {...cartItem} handleCloseDrawer={handleCloseDrawer} />
						</li>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	);
};

export default CartList;
