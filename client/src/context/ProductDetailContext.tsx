import {
	createContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { IBeer, ISKU } from "../types/generals";

type ProductDetailContextType = {
	currentProduct: IBeer | undefined;
	setCurrentProduct: (currentProduct: IBeer) => void;
	selectedSku: ISKU | undefined;
	setSelectedSku: (selectedSku: ISKU) => void;
};

const defaultContextValue: ProductDetailContextType = {
	currentProduct: undefined,
	setCurrentProduct: () => {},
	selectedSku: undefined,
	setSelectedSku: () => {},
};

export const ProductDetailContext =
	createContext<ProductDetailContextType>(
		defaultContextValue,
	);

type ProductDetailProviderProps = {
	children: ReactNode;
};

export const ProductDetailProvider = ({
	children,
}: ProductDetailProviderProps) => {
	const [currentProduct, setCurrentProduct] =
		useState<IBeer>();
	const [selectedSku, setSelectedSku] = useState<ISKU>();

	useEffect(() => {
		if (!selectedSku && currentProduct) {
			setSelectedSku(currentProduct?.skus[0]);
		} else if (selectedSku && currentProduct) {
			const incomingSku = currentProduct.skus.filter(
				(sku) => sku.code === selectedSku.code,
			)[0];

			if (
				(incomingSku &&
					incomingSku.price !== selectedSku.price) ||
				incomingSku.stock !== selectedSku.stock
			) {
				setSelectedSku(incomingSku);
			}
		}
	}, [currentProduct, selectedSku]);

	return (
		<ProductDetailContext.Provider
			value={{
				currentProduct,
				setCurrentProduct,
				selectedSku,
				setSelectedSku,
			}}>
			{children}
		</ProductDetailContext.Provider>
	);
};
