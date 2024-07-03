import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
	id: number;
	name: string;
	brand: string;
	image: string;
	price: string;
}

const Card: React.FC<CardProps> = ({
	id,
	name,
	image,
	price,
	brand,
}) => {
	return (
		<div className="relative flex flex-col justify-between items-center gap-2 bg-white p-4 rounded-lg rounded-tr-3xl shadow-sm">
			<Link
				to={`/product/${id}-${brand
					.toLowerCase()
					.replace(" ", "-")}`}
				className="flex flex-col items-center">
				<h3 className="font-semibold text-gray-800 text-left">
					{name}
				</h3>
				<div
					className="mb-2 w-28 h-28"
					style={{
						backgroundImage: `url(${image})`,
						backgroundSize: "cover",
						backgroundPosition: "center",
					}}>
					&nbsp;
				</div>
			</Link>
			<div className="flex justify-between items-center mt-2 w-full">
				<p className="text-lg font-bold text-gray-900 w-full text-left">
					${price}
				</p>
				<button
					className="w-10 h-10 absolute bottom-0 right-0 rounded-tl-lg rounded-br-lg flex items-center justify-center bg-primary"
					onClick={() =>
						console.log(`Add ${name} to cart`)
					}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<rect
							x="11"
							y="5"
							width="2"
							height="14"
							rx="1"
							fill="white"
						/>
						<rect
							x="5"
							y="13"
							width="2"
							height="14"
							rx="1"
							transform="rotate(-90 5 13)"
							fill="white"
						/>
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Card;
