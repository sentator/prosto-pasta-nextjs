import React from "react";
import Image from "next/image";

// import "./itemAdvantage.scss";
import img01 from "../../assets/images/item-advantage/01.png";
import img02 from "../../assets/images/item-advantage/02.png";
import img03 from "../../assets/images/item-advantage/03.png";

interface ItemAdvantageProps {
	title: string;
	description: string;
	number: number;
}

const ItemAdvantage: React.FC<ItemAdvantageProps> = ({ title, description, number }) => {
	const getImagePath = () => {
		switch (number) {
			case 1:
				return img01;
			case 2:
				return img02;
			case 3:
				return img03;
			default:
				return "";
		}
	};

	return (
		<div className="item-advantage">
			<div className="item-advantage__icon">
				<Image src={getImagePath()} alt="the first item" fill sizes="(max-width: 30em) 20vw, 100vw" />
			</div>
			<p className="item-advantage__title">{title}</p>
			<p className="item-advantage__description">{description}</p>
		</div>
	);
};

export default ItemAdvantage;
