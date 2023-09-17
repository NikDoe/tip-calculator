import { ChangeEvent, useState } from "react";
import Tips from "./components/Tips";
import BillPays from "./components/BillPays";
import ResetButton from "./components/ResetButton";
import Message from "./components/Message";

const initialFormData = {
	bill: 0,
	myTips: 0,
	friendTips: 0,
};

export type InitialFormDataType = typeof initialFormData;

const App = function () {
	const [data, setData] = useState(initialFormData);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value
		});
	};

	const tips = data.bill * (Number(data.myTips) + Number(data.friendTips)) / 2 / 100;
	const total = Number(data.bill) + tips;

	const show = (
		<>
			<Message
				bill={data.bill}
				tips={tips}
				total={total}
			/>
			<ResetButton
				setData={setData}
			/>
		</>
	);

	return (
		<>
			<BillPays
				bill={data.bill}
				inputname="bill"
				onChange={handleInputChange}
			/>
			<Tips
				selectName="myTips"
				text="ваши чаевые: "
				tips={data.myTips}
				onChange={handleInputChange}
			/>
			<Tips
				selectName="friendTips"
				text="чаевые друга: "
				tips={data.friendTips}
				onChange={handleInputChange}
			/>
			{data.bill > 0 && show}
		</>
	);
};

export default App;
