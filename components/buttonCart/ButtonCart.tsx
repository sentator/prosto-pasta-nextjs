import React from "react";
import classNames from "clsx";

import { cartVisibilityContext } from "../../context";
import { useAppSelector } from "../../hooks";

import styles from "./buttonCart.module.scss";

interface ButtonCartProps {
	isHeaderScrolled: boolean;
}

const ButtonCart: React.FC<ButtonCartProps> = ({ isHeaderScrolled = false }) => {
	const { showCart } = React.useContext(cartVisibilityContext);
	const itemsInCart = useAppSelector((state) => state.cart.totalQuantity);

	const btnIconClassnames = classNames(styles.icon, { [styles.shaking]: isHeaderScrolled });
	const btnQuantityClassnames = classNames(styles.quantity, {
		[styles.visible]: !!itemsInCart,
	});

	return (
		<button className={styles["button-cart"]} aria-label="open Cart" onClick={showCart}>
			<svg
				className={btnIconClassnames}
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<g clipPath="url(#clip0_1812_1778)">
					<path
						d="M15.9993 1.6665C18.1211 1.6665 20.1559 2.50936 21.6562 4.00965C23.1565 5.50994 23.9993 7.54477 23.9993 9.6665V10.9998H29.3327V13.6665H27.7767L26.7673 25.7772C26.7396 26.1104 26.5877 26.421 26.3417 26.6474C26.0958 26.8739 25.7737 26.9997 25.4394 26.9998H6.55935C6.22501 26.9997 5.90294 26.8739 5.65698 26.6474C5.41101 26.421 5.2591 26.1104 5.23135 25.7772L4.22068 13.6665H2.66602V10.9998H7.99935V9.6665C7.99935 7.54477 8.8422 5.50994 10.3425 4.00965C11.8428 2.50936 13.8776 1.6665 15.9993 1.6665ZM25.1007 13.6665H6.89668L7.78602 24.3332H24.2113L25.1007 13.6665ZM17.3327 16.3332V21.6665H14.666V16.3332H17.3327ZM11.9993 16.3332V21.6665H9.33268V16.3332H11.9993ZM22.666 16.3332V21.6665H19.9993V16.3332H22.666ZM15.9993 4.33317C14.631 4.33317 13.315 4.85908 12.3236 5.80214C11.3322 6.74519 10.7411 8.03323 10.6727 9.39984L10.666 9.6665V10.9998H21.3327V9.6665C21.3327 8.29818 20.8068 6.9822 19.8637 5.99076C18.9207 4.99931 17.6326 4.40825 16.266 4.33984L15.9993 4.33317Z"
						fill="#282828"
					/>
				</g>
				<defs>
					<clipPath id="clip0_1812_1778">
						<rect width="32" height="32" fill="white" />
					</clipPath>
				</defs>
			</svg>
			<span className={btnQuantityClassnames}>{itemsInCart}</span>
		</button>
	);
};

export default ButtonCart;
