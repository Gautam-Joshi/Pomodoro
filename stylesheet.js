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
			alignItems: "center",
			backgroundColor: "#00000000",
			marginTop: "40%",
		},
		text: {
			fontFamily: "Inter-SemiBold",
			alignItems: "center",
			fontSize: 27,
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
			overflow: "hidden",
		},
		circular: {
			navigateNext: {
				paddingTop: "1.5%",
				marginLeft: "37%",
				marginRight: "37%",
				marginTop: "17%",
				marginBottom: "9%",
			},
		},
		numpad: {
			backgroundColor: "#212121",
		},
		symbol: {
			borderRadius: 70,
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
			paddingTop: "25.5%",
			paddingLeft:"34%",
			color: "#000",
		},
		ripple: {
			color: "#000",
			foreground: false,
			borderless: false,
		},
	},

	numberDisplay: {
		view: {
			alignItems: "flex-end",
			marginTop: "-2%",
			marginBottom: "-3%",
		},
		text: {
			fontFamily: "Inter-SemiBold",
			fontSize: 100,
			letterSpacing: -7,
		},
		alive: {
			color: "#FFF"
		}
	},
})