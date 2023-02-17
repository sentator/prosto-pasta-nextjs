import { CrunchVariants } from "./CrunchVariants";
import { ProductLabels } from "./ProductLabels";
import { ProductSizes } from "./ProductSizes";

interface ICrunchVariantPrice {
	default: number;
	doubleFilling: number;
}

export interface IProductPrice {
	[ProductSizes.small]: {
		[CrunchVariants.default]: ICrunchVariantPrice;
		[CrunchVariants.coconut]: ICrunchVariantPrice;
		[CrunchVariants.chocolate]: ICrunchVariantPrice;
		[CrunchVariants.sesame]: ICrunchVariantPrice;
		[CrunchVariants.peanut]: ICrunchVariantPrice;
	};
	[ProductSizes.large]: {
		[CrunchVariants.default]: ICrunchVariantPrice;
		[CrunchVariants.coconut]: ICrunchVariantPrice;
		[CrunchVariants.chocolate]: ICrunchVariantPrice;
		[CrunchVariants.sesame]: ICrunchVariantPrice;
		[CrunchVariants.peanut]: ICrunchVariantPrice;
	};
}

export interface IProduct {
	id: string;
	title: string;
	labels: ProductLabels[] | null;
	label_hit: boolean;
	label_discount: boolean;
	label_soon: boolean;
	label_newTaste: boolean;
	image: {
		webp: string;
		src: string;
	};
	doubleFilling: boolean;
	sizes: ProductSizes[];
	crunches: CrunchVariants[];
	prices_old: IProductPrice | null;
	prices_current: IProductPrice;
	nutritions: { calories: number; proteins: number; fats: number; carbohydrates: number };
	composition: string;
	description: string;
}
