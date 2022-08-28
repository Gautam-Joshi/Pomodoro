/* Module Imports */
import React, {useState, useEffect} from 'react';
import { View, Text, Pressable
} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'
import {NumpadButton, SymbolButton} from './inputButton'

export function Numpad(){
	return(
	  /*
		  Should return a full numpad with
			button sizes as a part of layout,
		  handles the numbers given as input
		*/
		<>
			<Numrow style={{flex:1,}} innertext="123"/>
			<Numrow style={{flex:1,}} innertext="456"/>
			<Numrow style={{flex:1,}} innertext="789"/>
			<NumrowLast style={{flex: 1,}}
			innertext="0X"/>
		</>
	);
}

export function NumrowLast(props){
	return(
		<View style = {{flexDirection: "row", alignItems: "stretch"}}>
			<NumpadButton
				style = {{
					flex: 2,
					marginTop: "2.5%",
					paddingTop: "5.5%",
					marginLeft: "5%",
					paddingBottom: "-10%",
				}}
				innertext={props.innertext[0]} />

			<NumpadButton
				style = {{
					flex: 1,
					marginTop: "2.5%",
					paddingTop: "5.5%",
					marginLeft: "2.5%",
					marginRight: "5%",
					paddingBottom: "-10%",
				}}
				innertext={props.innertext[1]} />
		</View>
	);
}

export function Numrow(props){
	return(
		<View style = {{flexDirection: "row", alignItems: "stretch"}}>
			<NumpadButton
				style = {{
					marginTop: "2.5%",
					paddingTop: "5.5%",
					marginLeft: "5%",
				}}
				innertext={props.innertext[0]} />

			<NumpadButton
				style = {{
					marginTop: "2.5%",
					paddingTop: "5.5%",
					marginLeft: "2.5%"
					}}
				innertext={props.innertext[1]} />

			<NumpadButton
				style = {{
					marginTop: "2.5%",
					paddingTop: "5.5%",
					marginLeft: "2.5%",
					marginRight: "5%",
				}}
				innertext={props.innertext[2]} />
		</View>
	);
}
