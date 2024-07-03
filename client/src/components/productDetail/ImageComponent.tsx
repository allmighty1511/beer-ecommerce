import { useContext } from "react";
import { ProductDetailContext } from "../../context/ProductDetailContext";

const ImageComponent = () => {
	const { currentProduct } = useContext(
		ProductDetailContext,
	);

	return (
		<div className="flex items-center justify-center">
			<div
				className="h-60 w-60"
				style={{
					backgroundImage: `url(${
						"http://localhost:8080" + currentProduct?.image
					})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}></div>
		</div>
	);
};

export default ImageComponent;
