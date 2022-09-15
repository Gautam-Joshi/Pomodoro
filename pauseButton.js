/* Module Imports */
import React, { useContext } from 'react';
import { Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Custom Imports */
import { styles } from './stylesheet'
import { PauseDispatch } from './altTransient';

export function BaseButton(props) {
	const dispatch = useContext(PauseDispatch)

	function handlePress(action) {
		dispatch({
			type: action,
			value: props.innertext})
	}

	return(
		<Pressable
			style = {({ pressed }) => [
				{
					opacity: pressed
						? 0.3
						: 1
				},
				styles.button.base, props.style[1], styles.button.symbol,
			]}

			onPressOut= {() => {
				handlePress(props.actionType);
			}}
		>
			<Text style={styles.button.symbolText}>
				<Icon name={props.innertext} size={props.size} color="#000"/>
			</Text>
		</Pressable>
	);
}

export function SymbolButton(props){
	return(
			<BaseButton style={["symbol", props.style]} innertext={props.symbol}  actionType={props.actionType} size={props.size}/>
	);
}