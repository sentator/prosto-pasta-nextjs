import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Link from "next/link";

import styles from "./headerMenuAccordion.module.scss";

interface HeaderMenuAccordionProps {
	handleClose: () => void;
}

const HeaderMenuAccordion: React.FC<HeaderMenuAccordionProps> = ({ handleClose }) => {
	return (
		<Accordion
			disableGutters
			square
			sx={{
				padding: 0,
				boxShadow: "none",
				fontSize: "1.5rem",
				color: "var(--mainDarkColor)",
			}}
		>
			<AccordionSummary
				expandIcon={
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M7.99952 9.44844L11.2995 6.14844L12.2422 7.0911L7.99952 11.3338L3.75685 7.0911L4.69952 6.14844L7.99952 9.44844Z"
							fill="#282828"
						/>
					</svg>
				}
				aria-controls="panel1a-content"
				id="panel1a-header"
				sx={{
					padding: 0,
					minHeight: "unset",
					"&.Mui-focusVisible": {
						backgroundColor: "#ffffff",
						outline: "2px solid var(--accentColor)",
						outlineOffset: "2px",
						borderRadius: "6px",
					},
					"& .MuiAccordionSummary-content": {
						margin: 0,
						position: "relative",
						"&:after": {
							position: "absolute",
							content: '""',
							bottom: 0,
							left: "7%",
							height: "2px",
							width: "40%",
							backgroundColor: "var(--accentColor)",
							borderRadius: "10px",
							transform: "scale(0)",
							transition: "transform 0.3s ease-in-out",
						},
						"&:hover::after": {
							transform: "scale(1)",
						},
					},
				}}
			>
				Про нас
			</AccordionSummary>
			<AccordionDetails sx={{ padding: "0.3em 0.65em 0" }}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<Link
							className={styles.link}
							href="/anypage"
							onClick={handleClose}
							aria-label="go to page Хто ми"
						>
							Хто ми
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={styles.link}
							href="/anypage"
							onClick={handleClose}
							aria-label="go to page Відгуки"
						>
							Відгуки
						</Link>
					</li>
					<li className={styles.item}>
						<Link className={styles.link} href="/anypage" onClick={handleClose} aria-label="go to page FAQ">
							FAQ
						</Link>
					</li>
					<li className={styles.item}>
						<Link
							className={styles.link}
							href="/anypage"
							onClick={handleClose}
							aria-label="go to page Блог"
						>
							Блог
						</Link>
					</li>
				</ul>
			</AccordionDetails>
		</Accordion>
	);
};

export default HeaderMenuAccordion;
