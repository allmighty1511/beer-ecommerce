import { Link } from "react-router-dom";

const DetailHeader = (props: any) => {
	return (
		<header className="header flex items-center justify-between mb-6">
			{/* Menu Button */}
			<Link
				to={"/"}
				className="rounded-xl p-2 bg-white focus:bg-primary duration-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none">
					<rect
						x="5"
						y="11"
						width="15"
						height="1.5"
						fill="#323232"
					/>
					<path
						d="M11 5.20001L4 11.7L11 18.2"
						stroke="#323232"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</svg>
			</Link>
			{/* Text */}
			<p className="text-dark font-semibold">Detail</p>
			{/* Options Button */}
			<button className="rounded-xl p-2 bg-white focus:bg-primary duration-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none">
					<circle
						cx="5.5"
						cy="11.5"
						r="1.5"
						fill="#323232"
					/>
					<circle
						cx="12.5"
						cy="11.5"
						r="1.5"
						fill="#323232"
					/>
					<circle
						cx="19.5"
						cy="11.5"
						r="1.5"
						fill="#323232"
					/>
				</svg>
			</button>
		</header>
	);
};

export default DetailHeader;
