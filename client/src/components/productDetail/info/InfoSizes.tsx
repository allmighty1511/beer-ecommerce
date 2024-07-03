import React, { useContext } from "react";
import { ProductDetailContext } from "../../../context/ProductDetailContext";
import SizeButton from "./SizeButton";

const InfoSizes = () => {
	const { currentProduct } = useContext(
		ProductDetailContext,
	);

	return (
		<div className="flex flex-col gap-2">
			<p className="text-dark font-bold text-lg">Size</p>
			<div
				className={`flex gap-4 flex-wrap text-medium-dark text-sm`}>
				{currentProduct?.skus.map((sku) => (
					<SizeButton sku={sku} />
				))}
			</div>
		</div>
	);
};

export default InfoSizes;
