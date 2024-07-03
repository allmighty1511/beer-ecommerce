import { useContext } from "react";
import { ISKU } from "../../../types/generals";
import { ProductDetailContext } from "../../../context/ProductDetailContext";
import cx from "classnames";

interface ISizeButtonProps {
	sku: ISKU;
}

const SizeButton = (props: ISizeButtonProps) => {
	const { setSelectedSku, selectedSku } = useContext(
		ProductDetailContext,
	);

	return (
		<div
			className={cx("sizeButton rounded-full px-4 py-2", {
				active: props.sku.code === selectedSku?.code,
			})}
			onClick={() => {
				if (selectedSku) {
					setSelectedSku(props.sku);
				}
			}}>
			{props.sku.name}
		</div>
	);
};

export default SizeButton;
