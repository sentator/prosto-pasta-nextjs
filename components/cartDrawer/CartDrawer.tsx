import React from "react";
import { FocusTrap } from "@mui/base";
import { CSSTransition } from "react-transition-group";

import { ButtonVariants } from "../../types/ButtonVariants";
import { viewportWidthContext } from "../../context";
import { useAppSelector, useMount, useScrollbar } from "../../hooks";
import Portal from "../portal/Portal";
import CartList from "../cartList/CartList";
import Button from "../button/Button";
import CartEmpty from "../cartEmpty/CartEmpty";
import { myFont } from "@/pages/_app";

// import styles from "./cartDrawer.module.scss";

interface CartDrawerProps {
	isOpened: boolean;
	onClose: () => void;
}

const ANIMATION_TIME: number = 300;

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpened, onClose }) => {
	const { isDesktop } = React.useContext(viewportWidthContext);
	const { mounted } = useMount(isOpened, ANIMATION_TIME);
	const products = useAppSelector((state) => state.cart.items);
	const totalPrice = useAppSelector((state) => state.cart.totalPrice);
	const totalQuantity = useAppSelector((state) => state.cart.totalQuantity);
	const isCartEmpty = !products.length;

	const cartDrawerBackdropRef = React.useRef<HTMLDivElement>(null);
	const cartDrawerBodyRef = React.useRef<HTMLDivElement>(null);

	//----- for a custom scrollbar ----------
	const [cartBodyHeight, setCartBodyHeight] = React.useState<number | "unset">("unset");
	const [firstMount, setFirstMount] = React.useState<boolean>(true);

	const cartHeaderRef = React.useRef<HTMLElement>(null);
	const cartBodyRef = React.useRef<HTMLDivElement>(null);
	const cartFooterRef = React.useRef<HTMLElement>(null);

	const hasScroll = mounted && isDesktop;

	React.useEffect(() => {
		if (mounted) {
			setFirstMount(false);
		}
	}, [mounted]);

	// calculation of the cartBodyHeight
	React.useEffect(() => {
		if (cartHeaderRef.current && cartFooterRef.current) {
			const { height: cartHeaderHeight } = cartHeaderRef.current.getBoundingClientRect();
			const { height: cartFooterHeight } = cartFooterRef.current.getBoundingClientRect();
			const cartBodyHeight = window.innerHeight - (cartHeaderHeight + cartFooterHeight);
			if (isDesktop) {
				setCartBodyHeight(cartBodyHeight);
			} else {
				setCartBodyHeight("unset");
			}
		}
	}, [firstMount, totalQuantity, isDesktop]);

	const { reachedEnd, resetReachEnd } = useScrollbar(cartBodyRef, hasScroll);
	// --------------------------------------

	React.useEffect(() => {
		if (mounted) {
			document.addEventListener("keydown", handleKeyDown);

			return () => {
				document.removeEventListener("keydown", handleKeyDown);
			};
		}
	}, [mounted]);

	const handleCloseDrawer = () => {
		setFirstMount(true);
		resetReachEnd();
		onClose();
	};

	const handleKeyDown = React.useCallback((e: KeyboardEvent): void => {
		if (e.code === "Escape") {
			handleCloseDrawer();
		}
	}, []);

	const formatCartQuantity = (value: number, declinableWord: string): string => {
		const formatter = new Intl.NumberFormat("uk", {
			style: "unit",
			unit: "meter",
			unitDisplay: "long",
		});

		const ending = formatter.format(value).replace("метр", declinableWord);

		return ending;
	};

	if (!mounted) return null;

	return (
		<Portal>
			<div className="cart-drawer" role="dialog">
				<CSSTransition
					classNames="cart-backdrop-transition"
					in={isOpened}
					nodeRef={cartDrawerBackdropRef}
					timeout={ANIMATION_TIME}
					mountOnEnter
					unmountOnExit
					appear
				>
					<div
						className="cart-drawer__backdrop"
						onClick={handleCloseDrawer}
						ref={cartDrawerBackdropRef}
					></div>
				</CSSTransition>
				<CSSTransition
					classNames="cart-body-transition"
					in={isOpened}
					nodeRef={cartDrawerBodyRef}
					timeout={ANIMATION_TIME}
					mountOnEnter
					unmountOnExit
					appear
				>
					<div className="cart-drawer__body" ref={cartDrawerBodyRef}>
						<FocusTrap open={isOpened}>
							<div className={`cart ${myFont.className}`} tabIndex={0}>
								<header className="cart__header" ref={cartHeaderRef}>
									<button className="cart__btn-close" onClick={handleCloseDrawer}>
										<svg
											width="32"
											height="32"
											viewBox="0 0 32 32"
											fill="none"
											xmlns="http://www.w3.org/2000/svg"
										>
											<g clipPath="url(#clip0_2136_2102)">
												<path
													d="M9 7L25.9706 23.9706L24.0849 25.8562L7.11438 8.88562L9 7Z"
													fill="currentColor"
												/>
												<path
													d="M23.9706 7.02944L7 24L8.88562 25.8856L25.8562 8.91506L23.9706 7.02944Z"
													fill="currentColor"
												/>
											</g>
											<defs>
												<clipPath id="clip0_2136_2102">
													<rect width="32" height="32" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</button>
									<p className="cart__title">Ваш кошик</p>
									{isCartEmpty ? (
										<p className="cart__quantity">У вас не додано жодного товару</p>
									) : (
										<p className="cart__quantity">
											У вас додано {formatCartQuantity(totalQuantity, "товар")}
										</p>
									)}
								</header>
								{isCartEmpty && (
									<CartEmpty isEmpty={isCartEmpty} handleCloseDrawer={handleCloseDrawer} />
								)}
								<div
									className="cart__body"
									ref={cartBodyRef}
									style={{ maxHeight: cartBodyHeight }}
									data-endscrolled={reachedEnd}
								>
									<div className="cart__list">
										<CartList products={products} handleCloseDrawer={handleCloseDrawer} />
									</div>
								</div>

								{!isCartEmpty && (
									<footer className="cart__footer" ref={cartFooterRef}>
										<p className="cart__total-price">
											<span>Усього:</span> {totalPrice} грн
										</p>

										<Button
											className="cart__btn-submit"
											title="Перейти до оформлення"
											onClick={handleCloseDrawer}
											variant={ButtonVariants.default}
										/>
									</footer>
								)}
							</div>
						</FocusTrap>
					</div>
				</CSSTransition>
			</div>
		</Portal>
	);
};

export default CartDrawer;
