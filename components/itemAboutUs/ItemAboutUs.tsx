import React from "react";
import Popover from "@mui/material/Popover";
import Link from "next/link";
import classnames from "clsx";

import { myFont } from "../../pages/_app";
import styles from "./itemAboutUs.module.scss";

interface IItemAboutUs {
	enableCorrection: () => void;
	disableCorrection: () => void;
}

const ItemAboutUs: React.FC<IItemAboutUs> = ({ enableCorrection, disableCorrection }) => {
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
		enableCorrection();
	};

	const handleClose = () => {
		setAnchorEl(null);
		disableCorrection();
	};

	const open = Boolean(anchorEl);
	const id = open ? styles.popover : undefined;

	const buttonClassnames = classnames(styles.button, { [styles.active]: open });

	return (
		<div className={styles["item-about"]}>
			<button className={buttonClassnames} onClick={handleClick}>
				Про нас
			</button>

			<Popover
				className={classnames(styles.popover, myFont.className)}
				id={id}
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
			>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link className={styles.link} href="/anypage" onClick={handleClose}>
							Хто ми
						</Link>
					</li>
					<li className={styles.item}>
						<Link className={styles.link} href="/anypage" onClick={handleClose}>
							Відгуки
						</Link>
					</li>
					<li className={styles.item}>
						<Link className={styles.link} href="/anypage" onClick={handleClose}>
							FAQ
						</Link>
					</li>
					<li className={styles.item}>
						<Link className={styles.link} href="/anypage" onClick={handleClose}>
							Блог
						</Link>
					</li>
				</ul>
			</Popover>
		</div>
	);
};

export default ItemAboutUs;
