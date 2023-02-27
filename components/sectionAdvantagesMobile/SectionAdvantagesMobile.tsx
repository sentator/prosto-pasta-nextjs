import React from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import Button from "../button/Button";
import ItemAdvantage from "../itemAdvantage/ItemAdvantage";

// import "./sectionAdvantagesMobile.scss";

const SectionAdvantagesMobile: React.FC = () => {
	const listContainerRef = React.useRef<HTMLUListElement>(null);
	const buttonRef = React.useRef(null);

	React.useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		if (listContainerRef.current) {
			const timeline: gsap.Context = gsap.context(() => {
				gsap.timeline()
					.from(".section-advantages-mobile__item", {
						x: 100,
						y: 50,
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
					})
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
								start: "top bottom",
								end: "bottom bottom",
								scrub: 4,
								once: true,
							},
						}
					);
			}, listContainerRef.current);
			return () => {
				timeline.revert();
			};
		}
	}, []);
	return (
		<section className="section-advantages-mobile">
			<div className="container">
				<div className="section-advantages-mobile__inner">
					<h2 className="section-advantages-mobile__title title">Наші вкусняшки</h2>
					<p className="section-advantages-mobile__subtitle">Скуштувавши хоч раз - ти з нами назавжди!</p>
					<ul className="section-advantages-mobile__list" ref={listContainerRef}>
						<li className="section-advantages-mobile__item">
							<ItemAdvantage
								title="100% натуральний продукт"
								description="Лише ягоди, фрукти/овочі та цукор. Склад завжди максимально простий та натуральний, жодних прихованих складників. До речі, ми кладемо на 40% менше цукру, ніж наші пращури"
								number={1}
							/>
						</li>
						<li className="section-advantages-mobile__item">
							<ItemAdvantage
								title="Щедрість в кожній банці"
								description="Баночки завжди наповнені по самі вінця. Хоч ми й сучасні, але бабусина звичка дати “трошки більше” збереглася. Баночки завжди наповнені по самі вінця."
								number={2}
							/>
						</li>
						<li className="section-advantages-mobile__item">
							<ItemAdvantage
								title="Естетичний подарунок"
								description="Їжа, а особливо солодощі – це те, що підійде кожному, незалежно від статі, віку та вподобань. Особливо, в такому стильному пакуванні. Наші подарунки смачні не тільки всередині, а й зовні"
								number={3}
							/>
						</li>
					</ul>
					<Button
						className="section-advantages-mobile__button"
						title="За покупками!"
						href="/catalogue"
						ref={buttonRef}
					/>
				</div>
			</div>
		</section>
	);
};

export default SectionAdvantagesMobile;
