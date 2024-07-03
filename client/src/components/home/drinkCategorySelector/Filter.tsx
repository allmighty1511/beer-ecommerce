
import Button from "../../common/Button";
import Beer from "../../../img/Beer.png";
import Wine from "../../../img/Wine-glass.png";

const Filter = () => {

	return (
		<div className="flex w-full gap-4">
			<Button
				color="light"
				classname="flex-auto h-12 text-dark">
				<p>All</p>
			</Button>
			<Button
				color="primary"
				classname="flex-auto h-12 flex items-center justify-center gap-1 text-white">
				<img
					className="w-5 h-5"
					src={Beer}
					alt="Beer Icon"
				/>
				<p>Beer</p>
			</Button>
			<Button
				color="light"
				classname="flex-auto h-12 flex items-center justify-center gap-1 text-dark">
				<img
					className="w-5 h-5"
					src={Wine}
					alt="Beer Icon"
				/>
				<p>Wine</p>
			</Button>
		</div>
	);
};

export default Filter;
