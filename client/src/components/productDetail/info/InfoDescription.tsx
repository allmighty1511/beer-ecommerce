import React, { useContext, useState } from "react";
import { ProductDetailContext } from "../../../context/ProductDetailContext";

const InfoDescription = () => {
	const [showFullText, setShowFullText] = useState(false);

	const { currentProduct } = useContext(
		ProductDetailContext,
	);

	function truncateText(text: string, maxLength: number) {
		if (text.length <= maxLength) {
			return text;
		}
		let trimmedText = text.substr(0, maxLength);
		trimmedText = trimmedText.substr(
			0,
			Math.min(
				trimmedText.length,
				trimmedText.lastIndexOf(" "),
			),
		);

		return trimmedText + "...";
	}

	const toggleText = () => {
		setShowFullText(!showFullText);
	};

	const getButtonText = () => {
		switch (showFullText) {
			case false:
				return "Read more";
			case true:
				return "Read less";
		}
	};

	const generateDescriptionText = () => {
		switch (showFullText) {
			case true:
				return currentProduct?.information;
			case false:
				return truncateText(
					currentProduct?.information ?? "",
					250,
				);
		}
	};

	return (
		<div className="flex flex-col gap-2">
			<p className="text-dark font-bold text-lg">
				Description
			</p>
			<div className={`text-medium-dark text-sm`}>
				<p>
					{generateDescriptionText()}
					<button
						onClick={toggleText}
						className="text-primary font-bold text-sm">
						{getButtonText()}
					</button>
				</p>
			</div>
		</div>
	);
};

export default InfoDescription;
