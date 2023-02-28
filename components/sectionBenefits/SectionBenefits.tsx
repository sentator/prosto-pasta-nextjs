import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { viewportWidthContext } from "../../context/viewportWidthContext";
import ItemBenefit from "../itemBenefit/ItemBenefit";

// import styles from "./sectionBenefits.module.scss";
import emptyPlateImage from "../../assets/images/section-benefits/plate.jpg";
import fullPlateImage from "../../assets/images/section-benefits/plateWithSandwich.jpg";

const SectionBenefits: React.FC = () => {
	const { isMobile } = React.useContext(viewportWidthContext);
	const listContainerRef = React.useRef<HTMLUListElement>(null);

	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (listContainerRef.current) {
			let timeline: gsap.Context;

			if (isMobile) {
				timeline = gsap.context(() => {
					gsap.timeline()
						.to(".image-plate__full-plate", {
							ease: "steps(7)",
							maskPosition: "100%",
							webkitMaskPosition: "100%",
							scrollTrigger: {
								trigger: listContainerRef.current,
								toggleActions: "restart pause restart pause",
								start: "25% 80%",
								end: "55% 80%",
								scrub: 2,
							},
						})
						.from(".section-benefits__item:not(:nth-child(5))", {
							x: 100,
							y: 100,
							snap: "x,y",
							opacity: 0,
							ease: "power2.out",
							stagger: 0.2,
							scrollTrigger: {
								trigger: listContainerRef.current,
								toggleActions: "restart pause restart pause",
								start: "top 80%",
								end: "bottom 80%",
								scrub: 2,
								once: true,
							},
						});
				}, listContainerRef.current);
			} else {
				timeline = gsap.context(() => {
					gsap.timeline()
						.fromTo(
							".section-benefits__item:nth-child(1)",
							{ scale: 0.8, opacity: 0, xPercent: -50, yPercent: -50 },
							{
								opacity: 1,
								scale: 1,
								xPercent: 0,
								yPercent: 0,
								ease: "bounce.out",
								scrollTrigger: {
									trigger: listContainerRef.current,
									toggleActions: "restart pause restart pause",
									start: "top 80%",
									end: "top 80%",
									scrub: 3,
									once: true,
								},
							}
						)
						.fromTo(
							".section-benefits__item:nth-child(2)",
							{ scale: 0.8, opacity: 0, xPercent: 0, yPercent: -50 },
							{
								opacity: 1,
								scale: 1,
								xPercent: 0,
								yPercent: 0,
								ease: "bounce.out",
								scrollTrigger: {
									trigger: listContainerRef.current,
									toggleActions: "restart pause restart pause",
									start: "top 80%",
									end: "top 80%",
									scrub: 3,
									once: true,
								},
							}
						)
						.fromTo(
							".section-benefits__item:nth-child(3)",
							{ scale: 0.8, opacity: 0, xPercent: 50, yPercent: -50 },
							{
								opacity: 1,
								scale: 1,
								xPercent: 0,
								yPercent: 0,
								ease: "bounce.out",
								scrollTrigger: {
									trigger: listContainerRef.current,
									toggleActions: "restart pause restart pause",
									start: "top 80%",
									end: "top 80%",
									scrub: 3,
									once: true,
								},
							}
						)
						.fromTo(
							".section-benefits__item:nth-child(4)",
							{ scale: 0.8, opacity: 0, xPercent: -50, yPercent: 0 },
							{
								opacity: 1,
								scale: 1,
								xPercent: 0,
								yPercent: 0,
								ease: "bounce.out",
								scrollTrigger: {
									trigger: listContainerRef.current,
									toggleActions: "restart pause restart pause",
									start: "50% 80%",
									end: "50% 80%",
									scrub: 3,
									once: true,
								},
							}
						)
						.to(".image-plate__full-plate", {
							ease: "steps(7)",
							maskPosition: "100%",
							webkitMaskPosition: "100%",
							scrollTrigger: {
								trigger: listContainerRef.current,
								toggleActions: "restart pause restart pause",
								start: "75% 80%",
								end: "200% 80%",
								scrub: 1.2,
							},
						})
						.fromTo(
							".section-benefits__item:nth-child(6)",
							{ scale: 0.8, opacity: 0, xPercent: 50, yPercent: 0 },
							{
								opacity: 1,
								scale: 1,
								xPercent: 0,
								yPercent: 0,
								ease: "bounce.out",
								scrollTrigger: {
									trigger: listContainerRef.current,
									toggleActions: "restart pause restart pause",
									start: "50% 80%",
									end: "50% 80%",
									scrub: 3,
									once: true,
								},
							}
						);
				}, listContainerRef.current);
			}

			return () => {
				timeline.revert?.();
			};
		}
	}, [isMobile]);

	return (
		<div className="section-benefits">
			<div className="container">
				<div className="section-benefits__inner">
					<ul className="section-benefits__list" ref={listContainerRef}>
						<li className="section-benefits__item">
							<ItemBenefit
								title="100% натуральний продукт"
								description="Лише ягоди, фрукти/овочі та цукор. Склад завжди максимально простий та натуральний, жодних прихованих складників."
							/>
						</li>
						<li className="section-benefits__item">
							<ItemBenefit
								title="Зроблено з любов'ю"
								description="Їжа, а особливо солодощі – це те, що підійде кожному, незалежно від статі, віку та вподобань."
							/>
						</li>
						<li className="section-benefits__item">
							<ItemBenefit
								title="Просто паста"
								description="Баночки завжди наповнені по самі вінця. Хоч ми й сучасні, але бабусина звичка дати “трошки більше” збереглася. Баночки завжди наповнені по самі вінця."
							/>
						</li>
						<li className="section-benefits__item">
							<ItemBenefit
								title="Точно смачно!"
								description="Їжа, а особливо солодощі – це те, що підійде кожному, незалежно від статі, віку та вподобань."
							/>
						</li>
						<li className="section-benefits__item">
							<div className="image-plate">
								<Image
									className="image-plate__empty-plate"
									src={emptyPlateImage}
									alt="empty plate"
									fill
									sizes="(max-width: 30em) 100vw, (max-width: 62em) 50vw, 100vw"
								/>
								<Image
									className="image-plate__full-plate"
									src={fullPlateImage}
									alt="sandwich with a butter"
									fill
									sizes="(max-width: 30em) 100vw, (max-width: 62em) 50vw, 33vw"
									quality={100}
								/>
							</div>
						</li>
						<li className="section-benefits__item">
							<ItemBenefit
								title="Ну точно смачно :)"
								description="Хоч ми й сучасні, але бабусина звичка дати “трошки більше” збереглася."
							/>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default SectionBenefits;
