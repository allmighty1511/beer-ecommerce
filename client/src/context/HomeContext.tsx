import {
	createContext,
	useState,
	ReactNode,
	useEffect,
} from "react";
import { productsApi } from "../services/api";
import { IBeer } from "../types/generals";

type HomeContextType = {
	products: IBeer[];
	setProducts: (patients: IBeer[]) => void;
};

const defaultContextValue: HomeContextType = {
	products: [],
	setProducts: () => {},
};

export const HomeContext = createContext<HomeContextType>(
	defaultContextValue,
);

type HomeProviderProps = {
	children: ReactNode;
};

export const HomeProvider = ({
	children,
}: HomeProviderProps) => {
	const [products, setProducts] = useState<IBeer[]>([]);

	useEffect(() => {
		const fetchProducts = () => {
			productsApi
				.get("/api/products")
				.then((response) => {
					const data = response.data;

					const newData: IBeer[] = data.reduce(
						(acc: IBeer[], el: IBeer) => {
							let products =
								acc.filter(
									(accEl) =>
										accEl.productId === el.productId,
								) ?? [];

							if (products.length <= 0) {
								acc.push(el);
							}

							return acc;
						},
						[],
					);

					console.log(newData);

					setProducts(newData);
				})
				.catch((error) => {
					console.error("Failed to fetch products:", error);
				});
		};

		fetchProducts();

		const intervalId = setInterval(fetchProducts, 5000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<HomeContext.Provider
			value={{
				products,
				setProducts,
			}}>
			{children}
		</HomeContext.Provider>
	);
};
