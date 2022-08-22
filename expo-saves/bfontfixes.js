
import {View, Text, Button} from 'react-native';
import {useState} from 'react';
import { useFonts } from 'expo-font'

import {styles} from "./stylesheet"

export default function SAButton(props) {
  const [fontsLoaded] = useFonts({
    'InterBlack': require('./inter/InterBlack.otf')
  })

	const [isPressed, setIsPressed] = useState(props.pressed)

	return (
		<View style={styles.container}>
			<Button
				onPress = {() =>
					{setIsPressed(!isPressed)}
				}
				disabled = {isPressed}
				title='The Button'/>

			<Text></Text>

			<Text style={styles.textLabel}>Was this button was pressed? {isPressed ? 'Yes!' : 'Nah'}</Text>

			<Text></Text>
			<Text></Text>

			<Button
				onPress={() => {isPressed ? setIsPressed(!isPressed) : setIsPressed(isPressed)}}
				title='Reset'
			/>
		</View>
	)
}