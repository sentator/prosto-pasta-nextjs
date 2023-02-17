import React from "react";

import MainSlider from "../mainSlider/MainSlider";
// import Button from "../button/Button";

import styles from "./firstScreen.module.scss";

const FirstScreen: React.FC = () => {
	return (
		<section className="first-screen">
			<div className="container">
				<div className="first-screen__inner">
					<div className="first-screen__slider">
						<MainSlider />
					</div>
					<h1 className="first-screen__title">Приймаємо замовлення на смачнющу пасту</h1>
					<p className="first-screen__description">
						Найближча відправка — кожен день, а може і ні. А нові види паст з&#39;являються ледь не щотижня
						:)
					</p>
					{/* <Button className="first-screen__button" first-screen__ title="За покупками!" href="/catalogue" /> */}
				</div>
			</div>
		</section>
	);
};

export default FirstScreen;
