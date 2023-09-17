import { ChangeEvent, FC } from "react";

type TipsProps = {
    text: string;
    tips: number;
    selectName: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

const Tips: FC<TipsProps> = function (props) {
	const {
		text,
		tips,
		selectName,
		onChange
	} = props;

	return(
		<div className="row">
			<p>{text}</p>
			<select 
				name={selectName}
				value={tips}
				onChange={onChange}
			>
				<option value={0}>без чаевых(0%)</option>
				<option value={5}>всё было хорошо(5%)</option>
				<option value={10}>всё было отлично(10%)</option>
				<option value={20}>потрясающий сервис(20%)</option>
			</select>
		</div>
	);
};

export default Tips;