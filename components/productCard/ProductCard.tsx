import React from "react";
import Link from "next/link";
import Image from "next/image";

import { IProduct } from "../../types";
import { IUseCounterProductData } from "../../hooks/useCounter";
import ProductUserActions from "../productUserActions/ProductUserActions";
import ProductCardLabelsList from "../productCardLabelsList/ProductCardLabelsList";

// import styles from "./productCard.module.scss";

interface ProductCardProps
	extends Pick<IProduct, "id" | "title" | "labels" | "image" | "prices_old" | "prices_current"> {}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, labels, image, prices_old, prices_current }) => {
	// True when adding to cart animation is playing
	const [isAddingToCart, setAddingToCart] = React.useState<boolean>(false);

	const priceOld = prices_old?.[300]?.default?.default;
	const priceCurrent = prices_current[300].default.default;

	const productData: IUseCounterProductData = {
		id,
		title,
		image,
		price: priceCurrent,
	};

	return (
		<article className="product-card">
			<Link className="product-card__top" href={`/products/${id}`}>
				<div className="product-card__image">
					<Image
						src={image.src}
						alt={title}
						fill
						sizes="(max-width: 30em) 100vw ,(max-width: 48em) 50vw,(max-width: 62em) 40vw, 33vw"
						quality={100}
					/>
				</div>
				{labels && (
					<div className="product-card__labels">
						<ProductCardLabelsList labels={labels} />
					</div>
				)}
			</Link>
			<div className="product-card__description">
				<Link className="product-card__title" href={`/products/${id}`}>
					{title}
				</Link>
				<div className="product-card__prices">
					{priceOld && <p className="product-card__price product-card__price--old">{priceOld} грн</p>}
					<p className="product-card__price product-card__price--current">{priceCurrent} грн</p>
				</div>
				<div className="product-card__user-actions">
					<ProductUserActions
						productData={productData}
						isAddingToCart={isAddingToCart}
						setAddingToCart={setAddingToCart}
					/>
				</div>
			</div>
		</article>
	);
};

export default ProductCard;
