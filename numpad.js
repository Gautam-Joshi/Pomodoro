/* Module Imports */
import React from 'react';
import { View } from 'react-native';

/* Custom Imports */
import {NumpadButton, SymbolButton} from './inputButton'

export function Numpad(){
	return(
		<>
			<Numrow style={{flex:1, justifyContent: "space-between"}} innertext="123" />
			<Numrow style={{flex:1,}} innertext="456" />
			<Numrow style={{flex:1,}} innertext="789" />
			<NumrowLast style={{flex: 1,}}
			innertext="0" />

		</>
	);
}

export function NumrowLast(props){
	return(
		<View style = {{flexDirection: "row", height: 95}}>
			<NumpadButton
				style = {{
					flexGrow: 2,
					marginTop: "2.5%",
					paddingTop: "6.3%",
					paddingLeft: "2.5%",
				}}
				innertext={props.innertext[0]}
				actionType="increment"
				/>

			<SymbolButton
				style = {{
					flexGrow: 1,
					marginTop: "2.5%",
					marginLeft: "2.5%",
				}}
				size = {30}
				symbol="backspace"
				actionType="decrement"
				/>
		</View>
	);
}

export function Numrow(props){
	return(
		<View style = {{flexDirection: "row", alignItems: "space-between"}}>
			<NumpadButton
				style = {{
					marginTop: "2.5%",
					paddingTop: "5.5%",
				}}
				innertext={props.innertext[0]}
				actionType="increment"
				/>

			<NumpadButton
				style = {{
					marginTop: "2.5%",
					paddingTop: "5.5%",
					marginLeft: "2.5%"
					}}
				innertext={props.innertext[1]}
				actionType="increment"
				/>

			<NumpadButton
				style = {{
					marginTop: "2.5%",
					paddingTop: "5.5%",
					marginLeft: "2.5%",
				}}
				innertext={props.innertext[2]}
				actionType="increment"
				/>
		</View>
	);
}
