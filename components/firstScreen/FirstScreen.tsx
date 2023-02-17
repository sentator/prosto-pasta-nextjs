import React from "react";

import MainSlider from "../mainSlider/MainSlider";
import Button from "../button/Button";

import styles from "./firstScreen.module.scss";

const FirstScreen: React.FC = () => {
	return (
		<section className={styles["first-screen"]}>
			<div className="container">
				<div className={styles.inner}>
					<div className={styles.slider}>
						<MainSlider />
					</div>
					<h1 className={styles.title}>Приймаємо замовлення на смачнющу пасту</h1>
					<p className={styles.description}>
						Найближча відправка — кожен день, а може і ні. А нові види паст з&#39;являються ледь не щотижня
						:)
					</p>
					<Button className={styles.button} title="За покупками!" href="/catalogue" />
				</div>
			</div>
		</section>
	);
};

export default FirstScreen;
