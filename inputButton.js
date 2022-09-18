/* Module Imports */
import React, { useContext } from 'react';
import { Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

/* Custom Imports */
import { styles } from './stylesheet'
import { TimeDispatch } from './altTimeSet';

export function BaseButton(props) {

	const ButtonType = props.style[0]
	const dispatch = useContext(TimeDispatch)

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
				styles.button.base, props.style[1],
				ButtonType === "numpad" ? styles.button.numpad : styles.button.symbol,
			]}

			onPressOut= {() => {
				handlePress(props.actionType);
			}}
		>
			<Text
				style={[ButtonType === "numpad" ? styles.button.numpadText : styles.button.symbolText]}>
					{ButtonType === "numpad" ? props.innertext : <Icon name={props.innertext} size={props.size} color="#000"/>}
			</Text>
		</Pressable>
	);
}

export function NumpadButton(props){
	return(
			<BaseButton style={["numpad", props.style]} innertext={props.innertext} actionType={props.actionType}/>
	);
}

export function SymbolButton(props){
	return(
			<BaseButton style={["symbol", props.style]} innertext={props.symbol}  actionType={props.actionType} size={props.size}/>
	);
}