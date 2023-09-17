import { ChangeEvent, FC } from "react";

type BillPaysProps = {
    bill: number;
    inputname: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

const BillPays: FC<BillPaysProps> = function (props) {
	const {
		bill,
		inputname,
		onChange
	} = props;
    
	return (
		<div className="row">
			<p>стоимость счёта: </p>
			<input
				name={inputname}
				type="text"
				value={bill}
				onChange={onChange}
			/>
		</div >
	);
};

export default BillPays;