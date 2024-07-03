import React, {
	useContext,
	useEffect,
	useState,
} from "react";
import { useParams } from "react-router-dom";
import {
	ProductDetailContext,
	ProductDetailProvider,
} from "../../context/ProductDetailContext";
import DetailHeader from "../productDetail/DetailHeader";
import { productsApi } from "../../services/api";
import ImageComponent from "../productDetail/ImageComponent";
import Info from "../productDetail/info/Info";
import { IBeer } from "../../types/generals";

const ProductDetailComponent: React.FC = () => {
	const [productId, setProductId] = useState<number>();

	const { setCurrentProduct, selectedSku, setSelectedSku } =
		useContext(ProductDetailContext);

	const { productIdAndBrand } = useParams<{
		productIdAndBrand: string;
	}>();

	useEffect(() => {
		const fetchProduct = () => {
			if (productId) {
				productsApi
					.get(`/api/product/id/${productId}`)
					.then((response) => {
						const product: IBeer = response.data;

						setCurrentProduct(product);
					})
					.catch((error) => {
						console.error(
							"Failed to fetch product:",
							error,
						);
					});
			}
		};

		fetchProduct();

		const intervalId = setInterval(fetchProduct, 5000);

		return () => clearInterval(intervalId);
	}, [productId]);

	useEffect(() => {
		if (productIdAndBrand) {
			const separatorIndex = productIdAndBrand.indexOf("-");
			const productId = productIdAndBrand.substring(
				0,
				separatorIndex,
			);
			setProductId(parseInt(productId));
		}
	}, [productIdAndBrand]); 

	return (
		<main className="min-h-screen">
			<DetailHeader />
			<section className="flex flex-col gap-6 grow">
				<ImageComponent />
				<Info />
			</section>
		</main>
	);
};

const ProductDetail: React.FC = () => {
	return (
		<ProductDetailProvider>
			<ProductDetailComponent />
		</ProductDetailProvider>
	);
};

export default ProductDetail;
