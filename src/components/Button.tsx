import React, { ButtonHTMLAttributes, DetailedHTMLProps, memo } from "react";

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	className?: string;
	isDisabled?: boolean;
	onClick?: (event: React.MouseEvent) => void;
}

const ButtonComponent: React.FC<IButtonProps> = ({
	className,
	children,
	isDisabled = false,
	onClick,
	...rest
}) => {
	return (
		<button
			className={`${className}`}
			disabled={isDisabled}
			onClick={onClick}
			{...rest}
		>
			{/* <span className={`${className}`}>{children}</span> */}
			{children}
		</button>
	);
};

export const Button = memo(ButtonComponent);
