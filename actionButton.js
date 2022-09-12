/* Module Imports */
import React from 'react';
import { Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { styles } from './stylesheet'

export function StateButton(props) {
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
			onPressOut= {() => props.navigation.navigate(props.screen)}
		>
			<Text
				style={styles.button.symbolText}>
				<Icon name={props.symbol} size={30} color="#000"/>
			</Text>
		</Pressable>
	);
}
