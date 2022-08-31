import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
	Parent: {
		backgroundContainer: {
			flex: 1,
			backgroundColor: '#000',
			zIndex: -100,

		},
		container: {
			flex: 1,
			backgroundColor: '#00000000',
			paddingLeft: "7%",
			paddingRight: "7%",
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
		circular: {
			paddingTop: "2%",
			marginLeft: "37%",
			marginRight: "37%",
			marginTop: "9%",
			marginBottom: "9%",
		},
		numpad: {
			backgroundColor: "#FFFFFF22",
		},
		symbol: {
			borderRadius: 60,
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
			paddingTop: "25%",
			paddingLeft:"34%",
			color: "#000",
		},
		ripple: {
			color: "#555",
			foreground: false,
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