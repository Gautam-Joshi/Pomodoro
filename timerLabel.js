/* Module Imports */
import React, {useState/*, useEffect*/} from 'react';
import {View, Text} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'

export function TimerLabel() {
	const [title, setTitle] = useState(0)
	return(
		<View style = {styles.TimerLabel.view}>
			<Text style = {[styles.TimerLabel.text, title === 0 ? styles.TimerLabel.workSet : styles.TimerLabel.breakSet]}>
				{title === 0 ? `Work${"\n"}Minutes` : `Break${"\n"}Minutes`}
			</Text>
		</View>
	);
}