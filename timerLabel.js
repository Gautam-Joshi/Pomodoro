/* Module Imports */
import React, {useState/*, useEffect*/} from 'react';
import {View, Text} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'

export function TimerLabel(props){
	const title = props.title
	return(
		<View style = {styles.TimerLabel.view}>
			<Text style = {[styles.TimerLabel.text, title == "work" ? styles.TimerLabel.workSet : styles.TimerLabel.breakSet]}>
				{title == "work" ? `Set Work Minutes:` : `Set Break Minutes:`}
			</Text>
		</View>
	);
}