import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "clsx";

import { fixedPositionCorrectionContext, scrollLockContext } from "../../context";

import ItemAboutUs from "../itemAboutUs/ItemAboutUs";
import ButtonCart from "../buttonCart/ButtonCart";
import HeaderMenu from "../headerMenu/HeaderMenu";
// import { scrollToTop } from "../../services";

import styles from "./header.module.scss";
import logo from "../../assets/images/header/logo.svg";

interface IHeaderProps {
	isLarge: boolean;
	isDesktop: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isLarge, isDesktop }) => {
	const { scrollbarWidth } = React.useContext(scrollLockContext);
	const { correction, enableCorrection, disableCorrection } = React.useContext(fixedPositionCorrectionContext);

	// temporary----------------------------------------
	const scrollToTop = () => {};
	// -------------------------------------------------
	const headerClassnames = classNames([styles.header], {
		[styles.scrolled]: !isLarge,
	});

	return (
		<header className={headerClassnames} style={{ paddingRight: correction ? scrollbarWidth : 0 }}>
			<div className="container">
				{isDesktop ? (
					<nav className={styles.inner}>
						<ul className={styles.list}>
							<li className={styles.item}>
								<Link
									className={styles.link}
									href="/catalogue"
									aria-label="go to page Products"
									onClick={scrollToTop}
								>
									Продукція
								</Link>
							</li>
							<li className={styles.item}>
								<Link className={styles.link} href="/anypage" aria-label="go to page Partnership">
									Співробітництво
								</Link>
							</li>
						</ul>
						<div className={styles.logo}>
							<Link className={styles.logo} href="/" aria-label="go to homepage" onClick={scrollToTop}>
								<Image className={styles["logo__image"]} src={logo} alt="лого Просто Паста" />
							</Link>
						</div>
						<ul className={styles.list}>
							<li className={styles.item}>
								<ItemAboutUs
									enableCorrection={enableCorrection}
									disableCorrection={disableCorrection}
								/>
							</li>
							<li className={styles.item}>
								<Link className={styles.link} href="/anypage" aria-label="go to page Contacts">
									Контакти
								</Link>
							</li>
							<li className={styles.item}>
								<ButtonCart isHeaderScrolled={!isLarge} />
							</li>
						</ul>
					</nav>
				) : (
					<nav className={styles.inner}>
						<HeaderMenu enableCorrection={enableCorrection} disableCorrection={disableCorrection} />
						<div className={styles.logo}>
							<Link className={styles.logo} href="/" aria-label="go to homepage" onClick={scrollToTop}>
								<Image src={logo} alt="лого Просто Паста" />
							</Link>
						</div>
						<ButtonCart isHeaderScrolled={!isLarge} />
					</nav>
				)}
			</div>
		</header>
	);
};

export default Header;
