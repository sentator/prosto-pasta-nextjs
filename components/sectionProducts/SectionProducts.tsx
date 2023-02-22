import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import { useGetProductsQuery } from "../../services/mockApi";
import Button from "../button/Button";
import ProductCard from "../productCard/ProductCard";
import ProductCardSkeleton from "../productCardSkeleton/ProductCardSkeleton";
import SectionProductsError from "../sectionProductsError/SectionProductsError";

// import styles from "./sectionProducts.module.scss";

interface SectionProductsProps {
	sectionTitle: string;
	buttonTitle?: string;
	exludedId?: string;
}

const SectionProducts: React.FC<SectionProductsProps> = React.memo(({ sectionTitle, buttonTitle, exludedId = "" }) => {
	const buttonNextSlideRef = React.useRef<HTMLButtonElement>(null);
	const buttonPrevSlideRef = React.useRef<HTMLButtonElement>(null);

	const { transformedData, isError, isLoading, refetch } = useGetProductsQuery(
		{ page: 1, limit: 10 },
		{
			selectFromResult: ({ data, ...rest }) => ({
				transformedData: data?.filter((product) => product.id !== exludedId),
				...rest,
			}),
		}
	);

	const handleRefetch = () => {
		refetch();
	};

	return (
		<section className="section-products">
			<div className="container">
				<div className="section-products__inner">
					<div className="section-products__header">
						<div className="section-products__header-left">
							<h2 className="section-products__title">{sectionTitle}</h2>
							{!isError && (
								<div className="section-products__slider-buttons">
									<button
										className="section-products__slider-button section-products__button-prev"
										ref={buttonPrevSlideRef}
										aria-label="switch to previous slide"
										disabled={isLoading}
									/>
									<button
										className="section-products__slider-button section-products__button-next"
										ref={buttonNextSlideRef}
										aria-label="switch to next slide"
										disabled={isLoading}
									/>
								</div>
							)}
						</div>
						{buttonTitle && (
							<div className="section-products__right">
								<Button className="section-products__button" title={buttonTitle} href="/catalogue" />
							</div>
						)}
					</div>
					<div className="section-products__slider">
						{isLoading && (
							<Swiper
								spaceBetween={20}
								slidesPerView={"auto"}
								breakpoints={{
									769: {
										spaceBetween: 40,
										slidesOffsetBefore: 15,
										slidesOffsetAfter: 15,
									},
								}}
								slidesOffsetBefore={0}
								slidesOffsetAfter={0}
							>
								{new Array(3).fill(null).map((item, i) => (
									<SwiperSlide key={i}>
										<ProductCardSkeleton />
									</SwiperSlide>
								))}
							</Swiper>
						)}
						{transformedData && !isError && (
							<Swiper
								modules={[Navigation]}
								spaceBetween={20}
								slidesPerView={"auto"}
								navigation={{
									enabled: true,
									nextEl: buttonNextSlideRef.current,
									prevEl: buttonPrevSlideRef.current,
								}}
								speed={700}
								slidesOffsetBefore={0}
								slidesOffsetAfter={0}
								breakpoints={{
									769: {
										spaceBetween: 40,
										slidesOffsetBefore: 15,
										slidesOffsetAfter: 15,
										navigation: {
											enabled: true,
											nextEl: buttonNextSlideRef.current,
											prevEl: buttonPrevSlideRef.current,
										},
									},
								}}
							>
								{transformedData.map((product) => (
									<SwiperSlide key={product.id}>
										<ProductCard {...product} />
									</SwiperSlide>
								))}
							</Swiper>
						)}
						{isError && <SectionProductsError onRetry={handleRefetch} />}
					</div>
					{buttonTitle && !isError && (
						<div className="section-products__user-actions">
							<Button
								className="section-products__button section-products__button--mobile"
								title={buttonTitle}
								href="/catalogue"
							/>
						</div>
					)}
				</div>
			</div>
		</section>
	);
});

SectionProducts.displayName = "SectionProducts";

export default SectionProducts;
