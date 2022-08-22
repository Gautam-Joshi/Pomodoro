import {Text} from 'react-native';
import {useState, useEffect} from 'react';

export default function Timer(props) {
  const [count, setCount] = useState(0)

	const timerID = setTimeout(() => {
		setCount(count + 1)
	}, 1000);

	useEffect(() => {
		return () => {
			clearTimeout(timerID)
		}
	},)
	return <Text>{count}</Text>
}