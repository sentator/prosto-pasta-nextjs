import React from "react";
import Popover from "@mui/material/Popover";
import Link from "next/link";
import classnames from "clsx";

// import { scrollToTop } from "../../services";
import { myFont } from "@/pages/_app";
import HeaderMenuAccordion from "../headerMenuAccordion/HeaderMenuAccordion";

import styles from "./headerMenu.module.scss";

interface HeaderMenuProps {
	enableCorrection: () => void;
	disableCorrection: () => void;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ enableCorrection, disableCorrection }) => {
	// ----------------
	const scrollToTop = () => {};
	// ----------------
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

	const open = Boolean(anchorEl);
	const buttonClassnames = classnames(styles.burger, { [styles.active]: open });

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		enableCorrection();
	};

	const handleClose = () => {
		setAnchorEl(null);
		disableCorrection();
	};

	const handleCloseAndScroll = () => {
		handleClose();
		scrollToTop();
	};

	return (
		<>
			<button
				className={buttonClassnames}
				onClick={handleClick}
				aria-label="open or close menu"
				aria-expanded={open}
				aria-controls="header-menu__popover"
			>
				<svg className={styles.ham} viewBox="0 0 100 100" width="100%">
					<path
						className={classnames(styles.line, styles.top)}
						d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
					></path>
					<path
						className={classnames(styles.line, styles.middle)}
						d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
					></path>
					<path
						className={classnames(styles.line, styles.bottom)}
						d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
					></path>
				</svg>
			</button>
			<Popover
				className={myFont.className}
				id="header-menu__popover"
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				classes={{
					paper: styles.paper,
				}}
			>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link
							className={styles.link}
							href="/catalogue"
							aria-label="go to page Products"
							onClick={handleCloseAndScroll}
						>
							Продукція
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={styles.link}
							href="/anypage"
							aria-label="go to page Partnership"
							onClick={handleClose}
						>
							Співробітництво
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={styles.link}
							href="/anypage"
							aria-label="go to page Contacts"
							onClick={handleClose}
						>
							Контакти
						</Link>
					</li>
					<li className={styles.item}>
						<HeaderMenuAccordion handleClose={handleClose} />
					</li>
				</ul>
			</Popover>
		</>
	);
};

export default HeaderMenu;
