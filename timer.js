import React, { useState, useEffect } from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './stylesheet'

/* Component Imports */
import { StateButton } from './actionButton'
import { SymbolButton } from './inputButton'


export function Timer(props) {
	const navigation = useNavigation()
	const mode = "work"

	const [workTime, setWork] = useState(100)
	const [breakTime, setBreak] = useState(100)

	const countdown = setInterval(() => {
		if (mode === "work"){
				setWork(workTime - 1)
		} else {
				setBreak(breakTime - 1)
		}
	}, 1000);


	useEffect(() => {
		return () => {
			clearInterval(countdown)
		}
	})


	return(
    <View style={styles.transient.view}>
				<Text style={styles.transient.text}>
				{mode === "work" ? "Work" : "Break"}
				</Text>
				<Text style={styles.transient.countdown}>
				{workTime}
				</Text>
				<StateButton
					style ={styles.button.circular.done}
					symbol = "done"
					size = {30}
					screen = "Set"
				/>
		</View>
	)
}