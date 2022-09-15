/* Module Imports */
import React from 'react';
import { Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './stylesheet'

export function StateButton(props) {
	const navigation = useNavigation()
	return(
		<Pressable
			style = {({ pressed }) => [
				{
					opacity: pressed
						? 0.3
						: 1
				},
				props.style,
				styles.button.base,
				styles.button.symbol
			]}
			onPressOut= {() => navigation.navigate(props.screen)}
		>
			<Text
				style={styles.button.symbolText}>
				<Icon name={props.symbol} size={props.size} color="#000"/>
			</Text>
		</Pressable>
	);
}
