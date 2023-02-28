import React from "react";
import Image, { StaticImageData } from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";

import { viewportWidthContext } from "../../context/viewportWidthContext";
import SocialNetworks from "../socialNetworks/SocialNetworks";

// import "./sectionPhotos.scss";
import photo01 from "../../assets/images/section-photos/01.jpg";
import photo02 from "../../assets/images/section-photos/02.jpg";
import photo03 from "../../assets/images/section-photos/03.jpg";
import photo04 from "../../assets/images/section-photos/04.jpg";
import photo05 from "../../assets/images/section-photos/05.jpg";
import photo06 from "../../assets/images/section-photos/06.jpg";

interface IPhoto {
	src: StaticImageData;
	alt: string;
	size: "small" | "medium" | "large";
}

const photos: IPhoto[] = [
	{
		src: photo01,
		alt: "peanut butter sandwiches",
		size: "small",
	},
	{
		src: photo02,
		alt: "peanut butter sandwiches",
		size: "large",
	},
	{
		src: photo03,
		alt: "peanut butter sandwiches",
		size: "medium",
	},
	{
		src: photo04,
		alt: "peanut butter sandwiches",
		size: "medium",
	},
	{
		src: photo05,
		alt: "peanut butter sandwiches",
		size: "large",
	},
	{
		src: photo06,
		alt: "peanut butter sandwiches",
		size: "medium",
	},
];

const sizes = {
	small: "(max-width: 48em) 30vw, 17vw",
	medium: "(max-width: 48em) 30vw, 25vw",
	large: "30vw",
};

const SectionPhotos: React.FC = () => {
	const { isMobile } = React.useContext(viewportWidthContext);
	const sectionListRef = React.useRef<HTMLUListElement>(null);

	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (sectionListRef.current) {
			const timeline: gsap.Context = gsap.context(() => {
				gsap.timeline().from(".section-photos__item:not(:first-child)", {
					x: 100,
					y: -100,
					snap: "x,y",
					opacity: 0,
					pointerEvents: "none",
					ease: "power2.out",
					stagger: 0.2,
					scrollTrigger: {
						trigger: sectionListRef.current,
						toggleActions: "restart pause restart pause",
						start: "top 80%",
						end: "80% 80%",
						scrub: 3,
						once: true,
					},
				});
			}, sectionListRef.current);

			return () => {
				timeline.revert();
			};
		}
	}, [isMobile]);

	return (
		<div className="section-photos">
			<div className="container">
				<div className="section-photos__inner">
					{isMobile ? (
						<Swiper
							className="section-photos__swiper"
							spaceBetween={20}
							slidesPerView="auto"
							slidesOffsetBefore={15}
							slidesOffsetAfter={15}
						>
							{photos.map(({ src, alt, size }, index) => (
								<SwiperSlide className="section-photos__slide" key={index}>
									<Image src={src} alt={alt} width={168} height={168} />
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<ul className="section-photos__list" ref={sectionListRef}>
							<li className="section-photos__item">
								<p className="section-photos__item-description">Приєднуйся до нас, разом веселіше!</p>
								<SocialNetworks />
							</li>
							{photos.map(({ src, alt, size }, index) => (
								<li className={`section-photos__item section-photos__item--${size}-image`} key={index}>
									<div className="section-photos__item-wrapper">
										<Image src={src} alt={alt} fill sizes={sizes[size]} quality={100} />
									</div>
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

export default SectionPhotos;
