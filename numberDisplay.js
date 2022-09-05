/* Module Imports */
import React from 'react';
import {View, Text} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'

export function NumberDisplay(props) {
	/*
	const [display, setDisplay] = useState(0)

	const upTime = setInterval(() => {
		setDisplay(display + 1)
	}, 60000);

	useEffect(() => {
		return function cleanup() {
			clearInterval(upTime)
		}
	});
	*/
	return(
		<View style = {styles.numberDisplay.view}>
			<Text style = {[styles.numberDisplay.text, props.display === 0 ? "" : styles.numberDisplay.alive]}>
				{props.display}
			</Text>
		</View>
	);
}