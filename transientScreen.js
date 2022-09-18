import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './stylesheet'

/* Component Imports */
import { StateButton } from './resetButton'


export function Transient() {
	const navigation = useNavigation()
	const [count, setCount] = useState(3)

	const countID = setInterval(() => {
		if(count !== 0){
			setCount(count - 1)
		} else {
			navigation.navigate("Timer")
		}
	}, 1000);

	useEffect(() => {
		return () => {
			clearInterval(countID)
		}
	},)

	return(
    <View style={styles.transient.view}>
				<Text style={styles.transient.text}>
					Timer Starts In
				</Text>
				<Text style={styles.transient.countdown}>
					{count}
				</Text>
				<StateButton
					style ={styles.transient.stopsymbol}
					size = {55}
					symbol = "stop"
					screen="Set"
				/>
		</View>
	)
}