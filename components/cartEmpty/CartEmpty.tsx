import React from "react";
import Image from "next/image";
import { CSSTransition } from "react-transition-group";

import Button from "../button/Button";

// import styles from "./cartEmpty.module.scss";
import imageSrc from "../../assets/images/cart-empty/cartEmpty.png";
import imageWebp from "../../assets/images/cart-empty/cartEmpty.webp";

interface CartEmptyProps {
	isEmpty: boolean;
	handleCloseDrawer: () => void;
}

const CartEmpty: React.FC<CartEmptyProps> = ({ isEmpty, handleCloseDrawer }) => {
	const cartEmptyRef = React.useRef<HTMLDivElement>(null);

	return (
		<CSSTransition
			in={isEmpty}
			classNames="cartEmptyTransition"
			timeout={500}
			nodeRef={cartEmptyRef}
			mountOnEnter
			unmountOnExit
			appear
		>
			<div className="cart-empty" ref={cartEmptyRef}>
				<div className="cart-empty__image">
					<Image src={imageSrc} alt="пустий кошик" fill />
				</div>
				<p className="cart-empty__message">У кошику поки пусто :(</p>
				<Button
					className="cart-empty__btn"
					title="Перейти до каталогу"
					href="/catalogue"
					onClick={handleCloseDrawer}
				/>
			</div>
		</CSSTransition>
	);
};

export default CartEmpty;
