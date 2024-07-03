const HomeHeader = (props: any) => {
	return (
		<header className="header flex items-center justify-between mb-6">
			{/* Menu Button */}
			<button className="rounded-xl p-2 bg-white focus:bg-primary duration-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none">
					<rect
						x="4"
						y="5"
						width="16"
						height="1.5"
						rx="0.75"
						fill="#0F0D23"
					/>
					<rect
						x="4"
						y="11"
						width="10"
						height="1.5"
						rx="0.75"
						fill="#0F0D23"
					/>
					<rect
						x="4"
						y="17"
						width="16"
						height="1.5"
						rx="0.75"
						fill="#0F0D23"
					/>
				</svg>
			</button>
			{/* User Image */}
			<div className="userImage w-12 h-12 rounded-full">
				&nbsp;
			</div>
		</header>
	);
};

export default HomeHeader;
