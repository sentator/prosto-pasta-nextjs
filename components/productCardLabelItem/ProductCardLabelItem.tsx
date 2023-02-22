import React from "react";

import { ProductLabels } from "../../types";

// import styles from "./productCardLabelItem.module.scss";

interface ProductCardLabelItemProps {
	variant: ProductLabels;
}

const ProductCardLabelItem: React.FC<ProductCardLabelItemProps> = ({ variant }) => {
	switch (variant) {
		case ProductLabels.DISCOUNT:
			return <span className="product-card-label product-card-label--discount">Знижка -20%</span>;
		case ProductLabels.HIT:
			return <span className="product-card-label product-card-label--hit">Хіт</span>;
		case ProductLabels.SOON:
			return <span className="product-card-label product-card-label--soon">Скоро!</span>;
		case ProductLabels.NEW_TASTE:
			return <span className="product-card-label product-card-label--new-taste">Новий смак</span>;
		default:
			return null;
	}
};

export default ProductCardLabelItem;
