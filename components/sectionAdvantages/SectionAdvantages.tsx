import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";

import ItemAdvantage from "../itemAdvantage/ItemAdvantage";
import Button from "../button/Button";

// import styles from "./sectionAdvantages.module.scss";
import productImage from "../../assets/images/section-advantages/product.png";
import spoonImage from "../../assets/images/section-advantages/spoon.png";
import chocoImage from "../../assets/images/section-advantages/chocolate.png";

const SectionAdvantages: React.FC = () => {
	const advantagesPathContainerRef = React.useRef<HTMLDivElement>(null);
	const itemProductRef = React.useRef<SVGForeignObjectElement>(null);
	const itemSpoonRef = React.useRef<SVGForeignObjectElement>(null);
	const itemChocolateRef = React.useRef<SVGForeignObjectElement>(null);
	const pathP1Ref = React.useRef<SVGPathElement>(null);
	const pathP2Ref = React.useRef<SVGPathElement>(null);
	const pathP3Ref = React.useRef<SVGPathElement>(null);
	const pathP4Ref = React.useRef<SVGPathElement>(null);
	const pathP5Ref = React.useRef<SVGPathElement>(null);
	const itemAdvantage1Ref = React.useRef<SVGForeignObjectElement>(null);
	const itemAdvantage2Ref = React.useRef<SVGForeignObjectElement>(null);
	const itemAdvantage3Ref = React.useRef<SVGForeignObjectElement>(null);
	const buttonRef = React.useRef(null);

	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (advantagesPathContainerRef.current) {
			const timeline: gsap.Context = gsap.context(() => {
				gsap.timeline({ defaults: { duration: 0.5 } })
					.fromTo(
						itemProductRef.current,
						{ scale: 0.8, opacity: 1, rotate: -20 },
						{
							opacity: 1,
							scale: 1,
							rotate: 0,
							scrollTrigger: {
								trigger: itemProductRef.current,
								endTrigger: itemProductRef.current,
								toggleActions: "restart pause restart pause",
								start: "top bottom",
								scrub: 1,
							},
						}
					)
					.to(pathP5Ref.current, {
						strokeDashoffset: 0,
						scrollTrigger: {
							trigger: itemProductRef.current,
							endTrigger: itemAdvantage1Ref.current,
							toggleActions: "restart pause restart pause",
							start: "top bottom",
							scrub: 1,
						},
					})
					.fromTo(
						itemSpoonRef.current,
						{ scale: 0.5, y: -50, rotate: 20 },
						{
							scale: 1,
							delay: 1.5,
							y: 0,
							rotate: 0,
							scrollTrigger: {
								trigger: itemProductRef.current,
								endTrigger: itemAdvantage1Ref.current,
								toggleActions: "restart pause restart pause",
								start: "top bottom",
								scrub: 1,
							},
						}
					)
					.to(pathP4Ref.current, {
						strokeDashoffset: 0,
						scrollTrigger: {
							trigger: pathP4Ref.current,
							toggleActions: "restart pause restart pause",
							start: "top 80%",
							end: "bottom 80%",
							scrub: 1,
						},
					})
					.fromTo(
						itemAdvantage1Ref.current,
						{ opacity: 0, scale: 1, x: -50 },
						{
							opacity: 1,
							scale: 1,
							delay: 1.5,
							x: 0,
							duration: 1,
							scrollTrigger: {
								trigger: pathP4Ref.current,
								endTrigger: pathP3Ref.current,
								toggleActions: "restart pause restart pause",
								start: "bottom 80%",
								end: "center 80%",
								scrub: 1,
							},
						}
					)
					.to(pathP3Ref.current, {
						strokeDashoffset: -433,
						scrollTrigger: {
							trigger: itemAdvantage1Ref.current,
							endTrigger: itemAdvantage2Ref.current,
							toggleActions: "restart pause restart pause",
							start: "bottom 80%",
							end: "top 80%",
							scrub: 1,
						},
					})
					.fromTo(
						itemAdvantage2Ref.current,
						{ opacity: 0, scale: 1, x: 50 },
						{
							opacity: 1,
							scale: 1,
							delay: 1.5,
							x: 0,
							duration: 1,
							scrollTrigger: {
								trigger: itemAdvantage2Ref.current,
								endTrigger: itemChocolateRef.current,
								toggleActions: "restart pause restart pause",
								start: "center 80%",
								end: "top 80%",
								scrub: 1,
							},
						}
					)
					.to(pathP2Ref.current, {
						strokeDashoffset: -80,
						scrollTrigger: {
							trigger: itemAdvantage2Ref.current,
							endTrigger: itemChocolateRef.current,
							toggleActions: "restart pause restart pause",
							start: "bottom 80%",
							end: "center 80%",
							scrub: 1,
						},
					})
					.fromTo(
						itemChocolateRef.current,
						{ opacity: 0, scale: 0.6, x: 50, y: -50 },
						{
							opacity: 1,
							scale: 1,
							x: 0,
							y: 0,
							scrollTrigger: {
								trigger: itemChocolateRef.current,
								toggleActions: "restart pause restart pause",
								start: "85% 80%",
								end: "bottom 80%",
								scrub: 1.5,
							},
						}
					)
					.to(pathP1Ref.current, {
						strokeDashoffset: -190,
						scrollTrigger: {
							trigger: itemChocolateRef.current,
							endTrigger: itemAdvantage3Ref.current,
							toggleActions: "restart pause restart pause",
							start: "bottom 80%",
							end: "bottom 80%",
							scrub: 1,
						},
					})
					.fromTo(
						itemAdvantage3Ref.current,
						{ opacity: 0, x: -50 },
						{
							opacity: 1,
							delay: 1.5,
							x: 0,
							duration: 1,
							scrollTrigger: {
								trigger: itemAdvantage3Ref.current,
								toggleActions: "restart pause restart pause",
								start: "top 60%",
								end: "bottom 60%",
								scrub: 1,
							},
						}
					)
					.fromTo(
						buttonRef.current,
						{ y: 100, scale: 0 },
						{
							y: 0,
							scale: 1,
							ease: "bounce.out",
							scrollTrigger: {
								trigger: buttonRef.current,
								toggleActions: "restart pause restart pause",
								start: "top 80%",
								end: "bottom 80%",
								scrub: 4,
								once: true,
							},
						}
					);
			}, advantagesPathContainerRef.current);

			return () => {
				timeline.revert();
			};
		}
	}, []);

	return (
		<section className="section-advantages">
			<div className="container">
				<div className="section-advantages__inner">
					<h2 className="section-advantages__title title">Наші вкусняшки</h2>
					<p className="section-advantages__subtitle">Скуштувавши хоч раз - ти з нами назавжди!</p>
					<div className="advantages-path" ref={advantagesPathContainerRef}>
						<svg
							className="advantages-path__svg"
							viewBox="-50 -280 1000 1300"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								className="advantages-path__path advantages-path__path--p1"
								d="M807 919C792.252 934.545 733.426 932.353 622 927.035"
								ref={pathP1Ref}
							/>
							<path
								className="advantages-path__path advantages-path__path--p2"
								d="M898 701C923.015 713.095 933.367 723.925 932.99 764"
								ref={pathP2Ref}
							/>
							<path
								className="advantages-path__path advantages-path__path--p3"
								d="M5 430C28.8858 597.104 95.4284 642.181 312 632.836"
								ref={pathP3Ref}
							/>
							<path
								className="advantages-path__path advantages-path__path--p4"
								d="M105.5 63.5C43.3746 111.511 21.8901 158.197 1.5 268"
								ref={pathP4Ref}
							/>
							<path
								className="advantages-path__path advantages-path__path--p5"
								d="M383 36.9994C317.658 -2.70667 279.12 -6.20101 207.5 12.9993"
								ref={pathP5Ref}
							/>
							<foreignObject
								className="advantages-path__product"
								x="350"
								y="-200"
								width="621"
								height="620"
								ref={itemProductRef}
							>
								<Image src={productImage} alt="chocolate pasta" width={621} height={620} />
							</foreignObject>
							<foreignObject
								className="advantages-path__spoon"
								x="80"
								y="-50"
								width="242"
								height="231"
								ref={itemSpoonRef}
							>
								<Image src={spoonImage} alt="spoon" width={242} height={231} />
							</foreignObject>
							<foreignObject
								className="advantages-path__item"
								x="-20"
								y="290"
								width="600"
								height="200"
								ref={itemAdvantage1Ref}
							>
								<ItemAdvantage
									title="100% натуральний продукт"
									description="Лише ягоди, фрукти/овочі та цукор. Склад завжди максимально простий та натуральний, жодних прихованих складників. До речі, ми кладемо на 40% менше цукру, ніж наші пращури"
									number={1}
								/>
							</foreignObject>
							<foreignObject
								className="advantages-path__item"
								x="340"
								y="570"
								width="600"
								height="200"
								ref={itemAdvantage2Ref}
							>
								<ItemAdvantage
									title="Щедрість в кожній банці"
									description="Баночки завжди наповнені по самі вінця. Хоч ми й сучасні, але бабусина звичка дати “трошки більше” збереглася. Баночки завжди наповнені по самі вінця."
									number={2}
								/>
							</foreignObject>
							<foreignObject
								className="advantages-path__chocolate"
								x="820"
								y="780"
								width="184"
								height="157"
								ref={itemChocolateRef}
							>
								<Image src={chocoImage} alt="chocolate tower" width={184} height={157} />
							</foreignObject>
							<foreignObject
								className="advantages-path__item"
								x="25"
								y="850"
								width="600"
								height="200"
								ref={itemAdvantage3Ref}
							>
								<ItemAdvantage
									title="Естетичний подарунок"
									description="Їжа, а особливо солодощі – це те, що підійде кожному, незалежно від статі, віку та вподобань. Особливо, в такому стильному пакуванні. Наші подарунки смачні не тільки всередині, а й зовні"
									number={3}
								/>
							</foreignObject>
						</svg>
					</div>
					<Button
						className="section-advantages__button"
						title="За покупками!"
						href="/catalogue"
						ref={buttonRef}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionAdvantages;
