const SearchBar = () => {
	return (
		<div className="flex items-center justify-start bg-white rounded-xl flex-shrink-0 h-12 gap-1 px-4">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none">
				<g opacity="0.3">
					<circle
						cx="11.0647"
						cy="11.0647"
						r="6.31471"
						stroke="#0F0D23"
						strokeWidth="1.5"
					/>
					<path
						d="M16.0924 15.8441L19 18.6466"
						stroke="#0F0D23"
						strokeWidth="1.5"
						strokeLinecap="round"
					/>
				</g>
			</svg>
			<input
				className="w-full outline-none"
				placeholder="Search burger, pizza, drink or ect..."
				type="text"
				name="textInput"
			/>
		</div>
	);
};

export default SearchBar;
