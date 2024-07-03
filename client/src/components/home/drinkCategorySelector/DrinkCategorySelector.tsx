import { Link } from "react-router-dom";
import Filter from "./Filter";

const DrinkCategorySelector = () => {
	return (
		<div className="flex flex-col gap-4">
			{/* Upper Container */}
			<div className="flex items-center justify-between">
				<h3 className="text-dark font-bold text-lg">
					Drink Category
				</h3>
				<Link to={""}>See All</Link>
			</div>
			{/* Lower Container */}
			<Filter />
		</div>
	);
};

export default DrinkCategorySelector;
