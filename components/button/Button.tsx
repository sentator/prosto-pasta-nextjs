import React from "react";
import Link from "next/link";
import classNames from "clsx";

import { ButtonVariants } from "../../types/ButtonVariants";

import styles from "./button.module.scss";

interface IButtonProps {
	className?: string;
	title: string;
	href?: string;
	variant?: ButtonVariants;
	disabled?: boolean;
	onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement | any, IButtonProps>(
	({ className = "", title, href, variant = ButtonVariants.default, disabled = false, onClick = () => {} }, ref) => {
		const buttonClassnames = classNames(className, styles["button"], {
			[styles["button--withAdditionalFilling"]]: variant === ButtonVariants.addedAdditionalFilling,
			[styles["button--withoutAdditionalFilling"]]: variant === ButtonVariants.removedAdditionalFilling,
			[styles["button--withCartIcon"]]: variant === ButtonVariants.withCartIcon,
			[styles["button--formSubmit"]]: variant === ButtonVariants.formSubmit,
		});

		if (href) {
			return (
				<Link className={buttonClassnames} href={href} onClick={onClick} ref={ref}>
					{title}
				</Link>
			);
		}

		switch (variant) {
			case ButtonVariants.addedAdditionalFilling:
				return (
					<button
						className={buttonClassnames}
						aria-label="add additional filling"
						disabled={disabled}
						onClick={onClick}
						ref={ref}
					>
						{title}
					</button>
				);
			case ButtonVariants.removedAdditionalFilling:
				return (
					<button
						className={buttonClassnames}
						aria-label="remove additional filling"
						disabled={disabled}
						onClick={onClick}
						ref={ref}
					>
						{title}
					</button>
				);
			case ButtonVariants.withCartIcon:
				return (
					<button
						className={buttonClassnames}
						aria-label="add product to the cart"
						disabled={disabled}
						onClick={onClick}
						ref={ref}
					>
						{title}
					</button>
				);
			case ButtonVariants.formSubmit:
				return (
					<button
						className={buttonClassnames}
						aria-label={title}
						onClick={onClick}
						ref={ref}
						type="submit"
						disabled={disabled}
					>
						{title}
					</button>
				);
			default:
				return (
					<button
						className={buttonClassnames}
						aria-label={title}
						onClick={onClick}
						ref={ref}
						disabled={disabled}
					>
						{title}
					</button>
				);
		}
	}
);

Button.displayName = "Button";

export default Button;
