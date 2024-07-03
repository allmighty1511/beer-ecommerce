import React from "react";
import Greetings from "../home/Greetings";
import SearchBar from "../common/SearchBar";
import DrinkCategorySelector from "../home/drinkCategorySelector/DrinkCategorySelector";
import PopularProducts from "../home/popularProducts/PopularProducts";
import { HomeProvider } from "../../context/HomeContext";
import HomeHeader from "../home/HomeHeader";
import HomeNavigationBar from "../home/HomeNavigationBar";

const Home: React.FC = () => {
	return (
		<HomeProvider>
			<HomeHeader />
			<div className="flex flex-col gap-6 mb-20">
				<Greetings />
				<SearchBar />
				<DrinkCategorySelector />
				<PopularProducts />
			</div>
			<HomeNavigationBar />
		</HomeProvider>
	);
};

export default Home;
