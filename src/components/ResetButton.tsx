import { Dispatch, FC, SetStateAction } from "react";
import { InitialFormDataType } from "../App";

type ResetButtonProps = {
    setData: Dispatch<SetStateAction<InitialFormDataType>>
}

const ResetButton: FC<ResetButtonProps> = function ({ setData }) {
	const handleClick = () => {
		setData({
			bill: 0,
			myTips: 0,
			friendTips: 0,
		});
	};

	return (
		<button
			onClick={handleClick}
		>
            Очистить всё
		</button>
	);
};

export default ResetButton;