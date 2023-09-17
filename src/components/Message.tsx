import { FC } from "react";

type MessageProps = {
    total: number;
    bill: number;
    tips: number;
}

const Message: FC<MessageProps> = function (props) {
	const {
		total,
		bill,
		tips
	} = props;
    
	return (
		<p>Вы заплатили {total} (${bill} + ${tips} чаевые)</p>
	);
};

export default Message;