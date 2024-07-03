import React from "react";
import { Link } from "react-router-dom";

const HomeNavigationBar: React.FC = () => {
	return (
		<nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg ">
			<div className="flex justify-around items-center h-16">
				<NavItem
					to="/"
					icon="home"
					isActive={true}
				/>
				<NavItem
					to="/favorites"
					icon="heart"
				/>
				<NavItem
					to="/cart"
					icon="shopping-cart"
				/>
				<NavItem
					to="/profile"
					icon="user"
				/>
			</div>
		</nav>
	);
};

interface NavItemProps {
	to: string;
	icon: string;
	isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
	to,
	icon,
	isActive = false,
}) => {
	return (
		<Link
			to={to}
			className={`flex flex-col items-center w-12 ${
				isActive ? "text-custom-orange" : "text-gray-400"
			}`}>
			<div>
				{icon === "home" && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="83"
						height="77"
						viewBox="0 0 83 77"
						fill="none">
						<g filter="url(#filter0_f_405_469)">
							<circle
								cx="41.5"
								cy="41.5"
								r="21.5"
								fill="#FF9F24"
								fillOpacity="0.24"
							/>
						</g>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M44 51H48.8936C50.0602 51 51.0107 50.071 50.9999 48.9309V39.1763C50.9999 38.5746 50.7299 37.9939 50.2546 37.6033L42.8663 31.4909C42.0778 30.8364 40.9221 30.8364 40.1336 31.4909L32.7453 37.6033C32.27 37.9939 32 38.564 32 39.1763V48.9309C32 50.071 32.9505 51 34.1171 51H39V45.5C39 44.1193 40.1193 43 41.5 43C42.8807 43 44 44.1193 44 45.5V51Z"
							fill="#FF9F24"
						/>
						<defs>
							<filter
								id="filter0_f_405_469"
								x="0"
								y="0"
								width="83"
								height="83"
								filterUnits="userSpaceOnUse"
								colorInterpolationFilters="sRGB">
								<feFlood
									floodOpacity="0"
									result="BackgroundImageFix"
								/>
								<feBlend
									mode="normal"
									in="SourceGraphic"
									in2="BackgroundImageFix"
									result="shape"
								/>
								<feGaussianBlur
									stdDeviation="10"
									result="effect1_foregroundBlur_405_469"
								/>
							</filter>
						</defs>
					</svg>
				)}
				{icon === "heart" && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path
							d="M9 8H14"
							stroke="#8F8F8F"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 16H14"
							stroke="#8F8F8F"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M9 12H16"
							stroke="#8F8F8F"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<rect
							x="3.75"
							y="2.75"
							width="16.5"
							height="18.5"
							rx="3.25"
							stroke="#8F8F8F"
							strokeWidth="1.5"
						/>
					</svg>
				)}
				{icon === "shopping-cart" && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="21"
						height="21"
						viewBox="0 0 21 21"
						fill="none">
						<circle
							cx="10"
							cy="5"
							r="4.25"
							stroke="#8F8F8F"
							strokeWidth="1.5"
						/>
						<path
							d="M2.30623 8.59689C2.50953 6.97049 3.89208 5.75 5.53113 5.75H14.4689C16.1079 5.75 17.4905 6.97049 17.6938 8.59689L18.6938 16.5969C18.9362 18.5367 17.4237 20.25 15.4689 20.25H4.53113C2.57626 20.25 1.06375 18.5367 1.30623 16.5969L2.30623 8.59689Z"
							fill="white"
							stroke="#8F8F8F"
							strokeWidth="1.5"
						/>
						<circle
							cx="7.75"
							cy="9.75"
							r="0.75"
							fill="#8F8F8F"
						/>
						<circle
							cx="11.75"
							cy="9.75"
							r="0.75"
							fill="#8F8F8F"
						/>
						<circle
							cx="17.5"
							cy="5.5"
							r="2.75"
							fill="#FF9F24"
							stroke="white"
							strokeWidth="1.5"
						/>
					</svg>
				)}
				{icon === "user" && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none">
						<path
							d="M19.3845 5.48878C19.1245 5.17878 18.6945 5.08878 18.3145 5.20878C17.5045 5.47878 16.5845 5.40878 15.7845 4.95878C14.9845 4.49878 14.4645 3.73878 14.2845 2.90878C14.1945 2.50878 13.8945 2.17878 13.4945 2.11878C12.4945 1.95878 11.4545 1.95878 10.4345 2.12878C10.0345 2.19878 9.74454 2.51878 9.65454 2.91878C9.47454 3.75878 8.96454 4.51878 8.16454 4.98878C7.36454 5.45878 6.44454 5.51878 5.63454 5.25878C5.25454 5.13878 4.82454 5.22878 4.56454 5.53878C3.91454 6.34878 3.40454 7.24878 3.05454 8.19878C2.91454 8.57878 3.05454 8.99878 3.35454 9.25878C3.98454 9.83878 4.38454 10.6688 4.39454 11.5888C4.39454 12.5188 3.99454 13.3388 3.36454 13.9188C3.06454 14.1888 2.93454 14.6088 3.07454 14.9788C3.25454 15.4488 3.47454 15.9188 3.73454 16.3688C3.99454 16.8188 4.29454 17.2388 4.61454 17.6288C4.87454 17.9388 5.30454 18.0288 5.68454 17.9088C6.49454 17.6388 7.41454 17.7088 8.21454 18.1588C9.01454 18.6188 9.53454 19.3788 9.71454 20.2088C9.80454 20.5988 10.0945 20.9288 10.4945 20.9888C11.5045 21.1488 12.5345 21.1488 13.5545 20.9788C13.9545 20.9088 14.2445 20.5888 14.3345 20.1888C14.5145 19.3488 15.0245 18.5888 15.8245 18.1188C16.6245 17.6488 17.5445 17.5888 18.3545 17.8488C18.7445 17.9688 19.1745 17.8788 19.4245 17.5588C20.0745 16.7488 20.5845 15.8488 20.9445 14.8988C21.0845 14.5188 20.9445 14.0988 20.6445 13.8388C20.0045 13.2688 19.6045 12.4388 19.5945 11.5188C19.5945 10.5888 19.9945 9.76878 20.6245 9.18878C20.9245 8.91878 21.0545 8.49878 20.9145 8.12878C20.7345 7.65878 20.5145 7.18878 20.2545 6.73878C20.0045 6.28878 19.7045 5.87878 19.3845 5.48878Z"
							stroke="#8F8F8F"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12.0046 14.5188C13.6393 14.5188 14.9646 13.1935 14.9646 11.5588C14.9646 9.92399 13.6393 8.59875 12.0046 8.59875C10.3698 8.59875 9.04456 9.92399 9.04456 11.5588C9.04456 13.1935 10.3698 14.5188 12.0046 14.5188Z"
							stroke="#8F8F8F"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				)}
			</div>
		</Link>
	);
};

export default HomeNavigationBar;
