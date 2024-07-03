import React from "react";
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Home from "./components/pages/Home";
import ProductDetail from "./components/pages/ProductDetail";

function App() {
	return (
		<Router>
			<MainLayout>
				<Routes>
					<Route
						path="/"
						element={<Home />}
					/>
					<Route
						path="/product/:productIdAndBrand"
						element={<ProductDetail />}
					/>
				</Routes>
			</MainLayout>
		</Router>
	);
}

export default App;
