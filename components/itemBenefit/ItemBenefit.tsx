import React from "react";

// import "./itemBenefit.scss";

interface ItemBenefitProps {
	title: string;
	description: string;
}

const ItemBenefit: React.FC<ItemBenefitProps> = ({ title, description }) => {
	return (
		<div className="item-benefit">
			<p className="item-benefit__title">{title}</p>
			<p className="item-benefit__description">{description}</p>
		</div>
	);
};

export default ItemBenefit;
