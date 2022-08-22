import {View, Text, Button} from 'react-native';
import {useState} from 'react';
import { useFonts } from 'expo-font'

import {styles} from "../stylesheet"

export default function SAButton(props) {
	const [isPressed, setIsPressed] = useState(props.pressed)

	return (
		<View style={styles.container}>
			<Text style={styles.textLabel}>Was this button was pressed? {isPressed ? 'Yes!' : 'Nah'}</Text>
			<Button
				onPress = {() =>
					{setIsPressed(!isPressed)}
				}
				disabled = {isPressed}
				title='The Button'/>

			<Button
				onPress={() => {isPressed ? setIsPressed(!isPressed) : setIsPressed(isPressed)}}
				title='Reset'
			/>
		</View>
	)
}