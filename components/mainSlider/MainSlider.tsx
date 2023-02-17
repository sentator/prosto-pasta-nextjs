import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType, EffectCoverflow, Navigation } from "swiper";
import classNames from "clsx";

import styles from "./mainSlider.module.scss";
import image01 from "../../assets/images/main-slider/01.png";
import image02 from "../../assets/images/main-slider/02.png";
import image03 from "../../assets/images/main-slider/03.png";

const slides = [
	{
		link: "/products/6",
		src: image01,
		alt: "відро арахісової пасти 1",
	},
	{
		link: "/products/2",
		src: image02,
		alt: "відро арахісової пасти 2",
	},
	{
		link: "/products/8",
		src: image03,
		alt: "відро арахісової пасти 3",
	},
	{
		link: "/products/6",
		src: image01,
		alt: "відро арахісової пасти 4",
	},
	{
		link: "/products/2",
		src: image02,
		alt: "відро арахісової пасти 5",
	},
	{
		link: "/products/8",
		src: image03,
		alt: "відро арахісової пасти 6",
	},
];

const MainSlider: React.FC = React.memo(() => {
	const btnPrevRef = React.useRef<HTMLButtonElement>(null);
	const btnNextRef = React.useRef<HTMLButtonElement>(null);
	const swiperRef = React.useRef<SwiperType>();
	return (
		<Swiper
			className={styles["main-slider"]}
			modules={[EffectCoverflow, Navigation]}
			effect={"coverflow"}
			grabCursor={true}
			centeredSlides={true}
			slidesPerView={"auto"}
			coverflowEffect={{
				rotate: 0,
				stretch: 0,
				depth: 100,
				modifier: 10,
				slideShadows: false,
			}}
			initialSlide={1}
			loop={true}
			loopedSlides={2}
			shortSwipes={false}
			navigation={{ prevEl: btnPrevRef.current, nextEl: btnNextRef.current }}
			wrapperClass={classNames("swiper-wrapper", styles["swiper-wrapper"])}
			onBeforeInit={(swiper) => {
				swiperRef.current = swiper;
			}}
		>
			{slides.map(({ link, src, alt }) => (
				<SwiperSlide className={styles.slide} key={alt}>
					<Link className={styles.link} href={link}>
						<Image className={styles.image} src={src} alt={alt} fill />
					</Link>
				</SwiperSlide>
			))}
			<button
				className={classNames(styles["btn-prev"], "swiper-button-prev")}
				ref={btnPrevRef}
				onClick={() => swiperRef.current?.slidePrev()}
			></button>
			<button
				className={classNames(styles["btn-next"], "swiper-button-next")}
				ref={btnNextRef}
				onClick={() => swiperRef.current?.slideNext()}
			></button>
		</Swiper>
	);
});

MainSlider.displayName = "MainSlider";

export default MainSlider;
