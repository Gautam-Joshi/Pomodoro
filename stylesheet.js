import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
	Parent: {
		container: {
			backgroundColor: '#000',
			paddingLeft: "5%",
			paddingRight: "5%",
		},
	},

	TimerLabel: {
		view: {
			backgroundColor: "#00000000",
			marginTop: "40%",
		},
		text: {
			fontFamily: "Inter-SemiBold",
			fontSize: 24,
			letterSpacing: -0.5,
		},
		workSet: {
			color:"#B6E5FF",
		},
		breakSet: {
			color:"#D7FFA5",
		},
	},

	button: {
		base: {
			flex: 1,
			borderRadius: 9,
		},
		numpad: {
			backgroundColor: "#FFFFFF22",
		},
		symbol: {
			borderRadius: 90,
			backgroundColor: "#FFFFFF",
		},
		numpadText: {
			paddingLeft: "42%",
			paddingBottom: "-2%",
			marginBottom: 20,
			fontFamily: "Inter-Regular",
			fontSize: 30,
		},
		symbolText: {
			paddingTop:"10%",
			paddingLeft:"35%",
			color: "#000",
		},
	},

	numberDisplay: {
		view: {
			marginTop: "-10%",
			marginLeft: "80%",
		},
		text: {
			fontFamily: "Inter-SemiBold",
			fontSize: 100,
			letterSpacing: -7,
		},
	},
})