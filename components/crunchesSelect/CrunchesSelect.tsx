import React from "react";
import classNames from "clsx";
import Image from "next/image";
import { Popover } from "@mui/material";

import { CrunchVariants } from "../../types/CrunchVariants";
import { fixedPositionCorrectionContext } from "../../context/fixedPositionCorrectionContext";
import { myFont } from "@/pages/_app";

// import "./crunchesSelect.scss";
import defaultImage from "../../assets/images/crunches-list/default.jpg";
import coconutImage from "../../assets/images/crunches-list/coconut.jpg";
import chocolateImage from "../../assets/images/crunches-list/chocolate.jpg";
import sesameImage from "../../assets/images/crunches-list/sesame.jpg";
import peanutImage from "../../assets/images/crunches-list/peanut.jpg";

const crunches = [
	{
		value: CrunchVariants.default,
		image: defaultImage,
		title: "Не вибраний",
	},
	{
		value: CrunchVariants.coconut,
		image: coconutImage,
		title: "Кокос",
	},
	{
		value: CrunchVariants.chocolate,
		image: chocolateImage,
		title: "Шоколад",
	},
	{
		value: CrunchVariants.sesame,
		image: sesameImage,
		title: "Кунжут",
	},
	{
		value: CrunchVariants.peanut,
		image: peanutImage,
		title: "Арахіс",
	},
];

interface CrunchesSelectProps {
	selectedValue: CrunchVariants;
	handleChange: (value: CrunchVariants) => void;
	disabled?: boolean;
	skipCorrection?: boolean;
}

const CrunchesSelect: React.FC<CrunchesSelectProps> = ({
	selectedValue,
	handleChange,
	disabled = false,
	skipCorrection = false,
}) => {
	const { enableCorrection, disableCorrection } = React.useContext(fixedPositionCorrectionContext);
	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);

		if (!skipCorrection) {
			enableCorrection();
		}
	};

	const handleClose = () => {
		setAnchorEl(null);

		if (!skipCorrection) {
			disableCorrection();
		}
	};

	const open = Boolean(anchorEl);
	const id = open ? "crunches-select__popover" : undefined;

	const buttonClassnames = classNames("crunches-select__button", { active: open });

	const getCrunchName = (selectedValue: CrunchVariants): string => {
		if (crunches.length) {
			return crunches.filter((crunch) => crunch.value === selectedValue)[0].title;
		}

		return "Кранчі відсутні";
	};

	const handleSelection = (value: CrunchVariants): void => {
		handleChange(value);
		handleClose();
	};

	return (
		<div className="crunches-select">
			<button className={buttonClassnames} onClick={handleClick} disabled={disabled}>
				<span>Кранч: {getCrunchName(selectedValue)}</span>
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11.9993 14.1727L16.9493 9.22266L18.3633 10.6367L11.9993 17.0007L5.63528 10.6367L7.04928 9.22266L11.9993 14.1727Z"
						fill="currentColor"
					/>
				</svg>
			</button>

			<Popover
				className={classNames("crunches-select__popover", myFont.className)}
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
				sx={{
					".MuiPaper-root": {
						width: 300,
					},
				}}
			>
				<ul className="crunches-select__list">
					{crunches?.map(({ image, title, value }) => (
						<li className="crunches-select__item" key={value} onClick={() => handleSelection(value)}>
							<button className="crunches-select__item-button" data-selected={value === selectedValue}>
								<Image
									src={image}
									alt={title}
									className="crunches-select__item-img"
									width={40}
									height={40}
									unoptimized
								/>
								<span className="crunches-select__item-title">{title}</span>
							</button>
						</li>
					))}
				</ul>
			</Popover>
		</div>
	);
};

export default CrunchesSelect;
