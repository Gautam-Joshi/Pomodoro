/* Module Imports */
import React/*, {useState, useEffect} */ from 'react';
import { Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


/* Custom Imports */
import {styles} from './stylesheet'

export function BaseButton(props) {
	const ButtonType = props.style[0]
	return(
		<>
			<Pressable
				style = {
					[styles.button.base, props.style[1] , ButtonType === "numpad" ? styles.button.numpad : styles.button.symbol]
				}
			>
				<Text
					style={[ButtonType === "numpad" ? styles.button.numpadText : styles.button.symbolText]}>
				{ButtonType === "numpad" ? props.innertext : <Icon name={props.innertext} size={30} color="#000"/>}
				</Text>
			</Pressable>
		</>
	);
}

export function NumpadButton(props){
	return(
			<BaseButton style={["numpad", props.style]} innertext={props.innertext}/>
	);
}

export function SymbolButton(props){
	return(
			<BaseButton style={["symbol", props.style]} innertext={props.name}/>
	);
}