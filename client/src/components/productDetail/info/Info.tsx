import Cart from "./cart/Cart";
import InfoDescription from "./InfoDescription";
import InfoSizes from "./InfoSizes";
import InfoTitle from "./InfoTitle";
import "./info.css";

const Info = () => {
	return (
		<div className="info flex flex-col bg-white rounded-t-3xl pt-11 pb-5 px-4 -mx-6 grow gap-7">
			<InfoTitle />
			<InfoDescription />
			<InfoSizes />
			<Cart />
		</div>
	);
};

export default Info;
