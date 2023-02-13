import React from "react";
import Link from "next/link";

import SocialNetworks from "../socialNetworks/SocialNetworks";
// import { scrollToTop } from "../../services";

import styles from "./footer.module.scss";

const Footer: React.FC = () => {
	const scrollToTop = () => {};
	return (
		<footer className={styles.footer}>
			<div className="container">
				<nav className={styles.inner}>
					<div className={styles.copyright}>
						<p className={styles.copyrightText}>© 2022. Просто Паста.</p>
						<p className={styles.copyrightText}>Всі права застережено.</p>
						<Link className={styles.policy} href="/anypage">
							Політика конфіденційності
						</Link>
					</div>
					<div className={styles.content}>
						<p className={styles.ukraine}>Зроблено в Україні</p>
						<ul className={styles.menuList}>
							<li>
								<Link className={styles.menuLink} href="/" onClick={scrollToTop}>
									На головну
								</Link>
							</li>
							<li>
								<Link className={styles.menuLink} href="/catalogue" onClick={scrollToTop}>
									Продукція
								</Link>
							</li>
							<li>
								<Link className={styles.menuLink} href="/anypage">
									FAQ
								</Link>
							</li>
							<li>
								<Link className={styles.menuLink} href="/anypage">
									Про нас
								</Link>
							</li>
							<li>
								<Link className={styles.menuLink} href="/anypage">
									Контакти
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.social}>
						<p className={styles.socialLabel}>Ми в соцмережах :</p>
						<div>
							<SocialNetworks />
						</div>
					</div>
				</nav>
			</div>
		</footer>
	);
};

export default Footer;
