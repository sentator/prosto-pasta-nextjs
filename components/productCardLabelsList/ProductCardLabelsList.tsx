import React from "react";
import { ProductLabels } from "../../types/ProductLabels";
import ProductCardLabelItem from "../productCardLabelItem/ProductCardLabelItem";

// import styles from "./productCardLabelsList.module.scss";

interface ProductCardLabelsListProps {
	labels: ProductLabels[] | null;
}

const ProductCardLabelsList: React.FC<ProductCardLabelsListProps> = ({ labels }) => {
	return labels ? (
		<ul className="product-card-labels">
			{labels.map((label) => (
				<li className="product-card-labels__item" key={label}>
					<ProductCardLabelItem variant={label} />
				</li>
			))}
		</ul>
	) : null;
};

export default ProductCardLabelsList;
