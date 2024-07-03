import { Link } from "react-router-dom";
import Card from "./Card";
import { centsToDollar } from "../../../utils/helpers";
import { useContext } from "react";
import { HomeContext } from "../../../context/HomeContext";

const PopularProducts = () => {
	const { products } = useContext(HomeContext);

	return (
		<div className="flex flex-col gap-4">
			{/* Upper Container */}
			<div className="flex items-center justify-between">
				<h3 className="text-dark font-bold text-lg">
					Popular
				</h3>
				<Link to={""}>See All</Link>
			</div>
			{/* Content */}
			<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-4">
				{products.map((product) => (
					<Card
						key={product.id}
						id={product.productId}
						name={product.brand}
						brand={product.brand}
						image={"http://localhost:8080" + product.image}
						price={centsToDollar(product.price)}
					/>
				))}
			</div>
		</div>
	);
};

export default PopularProducts;
