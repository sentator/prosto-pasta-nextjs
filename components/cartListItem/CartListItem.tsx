import React from "react";
import Link from "next/link";

import { ButtonVariants } from "../../types";
import { IUseCounterProductData } from "../../hooks/useCounter";
import { useProductActions } from "../../hooks";
import { CartItem } from "../../redux/slices/cart";
import SizesList from "../sizesList/SizesList";
import Button from "../button/Button";
import CrunchesSelect from "../crunchesSelect/CrunchesSelect";
import CartListItemActions from "../cartListItemActions/CartListItemActions";

// import styles from "./cartListItem.module.scss";

interface CartListItemProps extends CartItem {
	handleCloseDrawer: () => void;
}

const CartListItem: React.FC<CartListItemProps> = ({
	id,
	title,
	image,
	size,
	doubleFilling,
	crunch,
	price,
	handleCloseDrawer,
}) => {
	const { handleChangeCrunch, handleChangeDoubleFilling, handleChangeSize } = useProductActions(id);

	const productData: IUseCounterProductData = { id, title, image, price };

	return (
		<article className="cart-item">
			<Link className="cart-item__photo" href={`/products/${id}`} onClick={handleCloseDrawer}>
				<picture className="cart-item__img">
					<source srcSet={image.webp} type="image/webp" />
					<img src={image.src} alt={title} />
				</picture>
			</Link>
			<Link className="cart-item__title" href={`/products/${id}`} onClick={handleCloseDrawer}>
				{title}
			</Link>
			<div className="cart-item__sizes">
				<SizesList selectedValue={size} handleChange={handleChangeSize} name={"sizes-cart-group-" + id} />
			</div>
			<div className="cart-item__double-filling">
				<Button
					className="cart-item__double-filling-btn"
					variant={
						doubleFilling ? ButtonVariants.addedAdditionalFilling : ButtonVariants.removedAdditionalFilling
					}
					title={doubleFilling ? "Подвійна начинка додана!" : "Додати подвійну начинку"}
					onClick={handleChangeDoubleFilling}
				/>
			</div>
			<div className="cart-item__crunch">
				<CrunchesSelect selectedValue={crunch} handleChange={handleChangeCrunch} skipCorrection />
			</div>
			<div className="cart-item__actions">
				<CartListItemActions productData={productData} />
			</div>
			<div className="cart-item__price">{price} грн</div>
		</article>
	);
};

export default CartListItem;
