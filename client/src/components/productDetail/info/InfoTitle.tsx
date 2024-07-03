import { useContext } from "react";
import { ProductDetailContext } from "../../../context/ProductDetailContext";
import { centsToDollar } from "../../../utils/helpers";

const InfoTitle = () => {
	const { currentProduct, selectedSku } = useContext(
		ProductDetailContext,
	);

	return (
		<div className="flex items-start justify-between">
			{/* Left */}
			<div className="flex flex-col items-start justify-start gap-1">
				{/* Left Description */}
				<h3 className="text-dark font-bold text-2xl">
					{currentProduct?.brand}
				</h3>
				{/* Right Description */}
				<p className="text-medium-dark text-sm">
					Origin: {currentProduct?.origin} | Stock:{" "}
					{selectedSku?.stock}
				</p>
			</div>
			{/* Right */}
			<p className="text-primary text-2xl font-bold">
				${centsToDollar(selectedSku?.price ?? 0)}
			</p>
		</div>
	);
};

export default InfoTitle;
