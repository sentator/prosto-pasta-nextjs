import React from "react";
import Image from "next/image";

import Button from "../button/Button";

// import styles from "./sectionProductsError.module.scss";
import imageSrc from "../../assets/images/product-page-error/error_img.jpg";

interface SectionProductsErrorProps {
	onRetry?: () => void;
}

const SectionProductsError: React.FC<SectionProductsErrorProps> = ({ onRetry }) => {
	return (
		<div className="section-products-error">
			<div className="section-products-error__media">
				<Image
					className="section-products-error__image"
					src={imageSrc}
					alt="Сталася помилка"
					sizes="(max-width: 48em) 100vw, 40vw"
					fill
				/>
			</div>
			<div className="section-products-error__content">
				<p className="section-products-error__title">
					Сталася помилка при завантаженні інформації про продукт!
				</p>
				<p className="section-products-error__subtitle">
					На жаль, інформацію про продукт не було завантажено. Спробуйте, будь ласка, повторити Ваш запит
					пізніше!
				</p>
				<div className="section-products-error__buttons">
					<Button className="section-products-error__button-home" href="/" title="На головну" />
					{onRetry && (
						<Button
							className="section-products-error__button-retry"
							title="Завантажити знову"
							onClick={onRetry}
						/>
					)}
				</div>
			</div>
		</div>
	);
};

export default SectionProductsError;
