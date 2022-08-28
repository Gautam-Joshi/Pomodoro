/* Module Imports */
import React/*, {useState, useEffect} */ from 'react';
import { Text, Pressable } from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'

export function BaseButton(props) {
	return(
		<>
			<Pressable
				style = {[styles.button.base, props.style[1] , props.style[0] === "numpad" ? styles.button.numpad : styles.button.symbol]
				}
			>
				<Text
					style={[props.style[0] === "numpad" ? styles.button.numpadText : styles.button.symbolText]}>
				{props.innertext}
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
			<BaseButton style={["symbol", props.style]} innertext={props.innertext}/>
	);
}