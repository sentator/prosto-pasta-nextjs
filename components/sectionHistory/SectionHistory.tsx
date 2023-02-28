import React from "react";
import Button from "../button/Button";

// import "./sectionHistory.scss";

const SectionHistory: React.FC = () => {
	return (
		<section className="section-history">
			<div className="container">
				<div className="section-history__inner">
					<h2 className="section-history__title title">Наша історія</h2>
					<div className="section-history__content">
						<p className="section-history__text">
							Ми – творча бакалійна компанія. Ми прагнемо вдихнути в такі звичайні продукти, як закрутки,
							нове життя. Бакалія може бути красивою, і ми доводимо це кожного дня!
						</p>
						<p className="section-history__text">
							При виготовленні продукції ми дотримуємось всіх норм роботи харчового виробництва. Нам
							вдається зберігати домашню технологію приготування, саме тому в варенні залишаються цілі
							ягідки і продукт є максимально безпечним.
						</p>
					</div>
					<Button className="section-history__button" title="Більше про нас" href="/anypage" />
				</div>
			</div>
		</section>
	);
};

export default SectionHistory;
