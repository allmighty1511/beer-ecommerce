export interface ISKU {
	code: string;
	name: string;
	stock: number;
	price: number;
}

export interface IBeer {
	id: number;
	productId: number;
	brand: string;
	image: string;
	style: string;
	substyle: string;
	abv: string;
	origin: string;
	information: string;
	price: number;
	stock: number;
	skus: ISKU[];
}

export interface ProductData {
	[key: string]: {
		stock: number;
		price: number;
	};
}
