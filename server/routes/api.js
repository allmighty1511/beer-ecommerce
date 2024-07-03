import express from "express";
const router = express.Router();

let products = [];
let stockPrices = {};

async function loadProducts() {
	try {
		const module = await import("../data/products.js");
		products = module.default;
		console.log("Productos cargados:", products.length);
	} catch (error) {
		console.error("Error al cargar los productos:", error);
	}
}

async function loadStockPrice() {
	try {
		const module = await import("../data/stock-price.js");
		stockPrices = module.default;
		console.log(
			"Precios de stock cargados:",
			Object.keys(stockPrices).length,
		);
	} catch (error) {
		console.error(
			"Error al cargar precios de stock:",
			error,
		);
	}
}

async function initializeData() {
	await Promise.all([loadProducts(), loadStockPrice()]);
	console.log("Datos inicializados");
}

initializeData();

router.get("/products", (req, res) => {
	let skus = Object.keys(stockPrices);

	const finalProducts = skus.reduce((acc, sku) => {
		const currentProduct = products.find((product) =>
			product.skus.some(
				(skuDetail) => skuDetail.code === sku,
			),
		);

		if (currentProduct) {
			const skuDetail = currentProduct.skus.find(
				(skuDetail) => skuDetail.code === sku,
			);

			const object = {
				id: sku,
				productId: currentProduct.id,
				price: stockPrices[sku].price,
				stock: stockPrices[sku].stock,
				brand: currentProduct.brand,
				image: currentProduct.image,
				style: currentProduct.style,
				substyle: currentProduct.substyle,
				abv: currentProduct.abv,
				origin: currentProduct.origin,
				information: currentProduct.information,
				skuName: skuDetail ? skuDetail.name : "Unknown",
			};

			acc.push(object);
		}

		return acc;
	}, []);

	res.json(finalProducts);
});

router.get(
	"/product/stock-price/:sku",

	(req, res) => {
		const sku = req.params.sku;

		const product = products.find((p) =>
			p.skus.some((s) => s.code === sku),
		);
		const stockPrice = stockPrices[sku];

		if (!product || !stockPrice) {
			return res
				.status(404)
				.json({ error: "Producto no encontrado" });
		}

		const skuInfo = product.skus.find(
			(s) => s.code === sku,
		);

		const response = {
			id: product.id,
			brand: product.brand,
			sku: sku,
			name: skuInfo.name,
			price: stockPrice.price,
			stock: stockPrice.stock,
		};

		res.json(response);
	},
);

router.get("/product/id/:id", (req, res) => {
	const id = parseInt(req.params.id);

	const product = products.find((p) => p.id === id);

	if (!product) {
		return res
			.status(404)
			.json({ error: "Producto no encontrado" });
	}

	const productWithStock = {
		...product,
		skus: product.skus.map((sku) => ({
			...sku,
			...stockPrices[sku.code],
		})),
	};

	res.json(productWithStock);
});

export default router;
