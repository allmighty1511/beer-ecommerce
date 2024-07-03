import { ReactNode } from "react";
import cx from "classnames";

interface IButtonProps {
	children: ReactNode;
	classname: string;
	color: "primary" | "light";
	onClick?: () => {};
}

const Button = (props: IButtonProps) => (
	<button
		className={cx(
			"rounded-xl flex-auto",
			props.classname,
			props.color === "primary" ? "bg-primary" : "bg-white",
		)}
		onClick={props.onClick}>
		{props.children}
	</button>
);

export default Button;
