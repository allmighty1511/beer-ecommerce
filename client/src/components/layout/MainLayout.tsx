import React from "react";

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({
	children,
}) => {
	return (
		<div className="flex relative flex-col min-h-screen px-6 pt-10 bg-custom-light font-sans">
			<main className="flex-grow container mx-auto">
				{children}
			</main>
		</div>
	);
};

export default MainLayout;
