import "./cart.css";

const Cart = () => {
	return (
		<div className="flex gap-6">
			{/* Left Button */}
			<button className="flex items-center justify-center leftButton">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none">
					<circle
						cx="12"
						cy="6"
						r="4.25"
						stroke="#FF9F24"
						stroke-width="1.5"
					/>
					<path
						d="M4.30623 9.59689C4.50953 7.97049 5.89208 6.75 7.53113 6.75H16.4689C18.1079 6.75 19.4905 7.97049 19.6938 9.59689L20.6938 17.5969C20.9362 19.5367 19.4237 21.25 17.4689 21.25H6.53113C4.57626 21.25 3.06375 19.5367 3.30623 17.5969L4.30623 9.59689Z"
						fill="white"
						stroke="#FF9F24"
						stroke-width="1.5"
					/>
					<circle
						cx="9.75"
						cy="10.75"
						r="0.75"
						fill="#FF9F24"
					/>
					<circle
						cx="13.75"
						cy="10.75"
						r="0.75"
						fill="#FF9F24"
					/>
				</svg>
			</button>
			{/* Right Button */}
			<button className="rightButton">Add to cart</button>
		</div>
	);
};

export default Cart;
