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
			backgroundColor: '#000',
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
			overflow: "hidden",
		},
		circular: {
			navigateNext: {
				maxHeight: 100,
				width: 100,
				borderRadius: 50,
				marginTop: 34,
				marginLeft: "35%",
				marginRight: "37%",
				paddingTop: "3%",
				paddingLeft: "0.7%",
			},
			navigateBefore: {
				maxHeight: 100,
				maxWidth: 100,
				borderRadius: 50,
				marginLeft: 30,
				marginRight: 40,
				marginTop: 34,
				paddingLeft: 2,
				paddingTop: 10,
				paddingBottom: 32,
			},
			done: {
				maxHeight: 100,
				maxWidth: 100,
				borderRadius: 50,
				marginRight: 30,
				marginLeft: 40,
				marginTop: 34,
				paddingLeft: 2,
				paddingTop: 10,
				paddingBottom: 32,
			},
		},

		symbol: {
			borderRadius: 70,
			backgroundColor: "#FFF",
		},
		symbolText: {
			paddingTop: "25.5%",
			paddingLeft:"34%",
			color: "#000",
		},

		numpad: {
			backgroundColor: "#212121",
		},
		numpadText: {
			color: "#FFF",
			paddingLeft: "42%",
			paddingBottom: "-2%",
			marginBottom: 20,
			fontFamily: "Inter-Regular",
			fontSize: 30,
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
			marginTop: -5,
			marginBottom: "-3%",
		},
		text: {
			color: "#969696",
			fontFamily: "Inter-SemiBold",
			fontSize: 100,
			letterSpacing: -7,
		},
		alive: {
			color: "#FFF"
		}
	},

	transient: {
		view: {
			flex: 1,
			backgroundColor: '#272200',
			zIndex: -100,
			paddingLeft: "7%",
			paddingRight: "7%",
			alignItems: "center",
		},
		text: {
			marginTop: "40%",
			fontFamily: "Inter-SemiBold",
			fontSize: 24,
			letterSpacing: -0.5,
			color: "#FFF"
		},
		countdown: {
			fontFamily: "Inter-SemiBold",
			fontSize: 100,
			letterSpacing: -7,
			color: "#FFD90E",
		},
		stopsymbol: {
			color: "#FFD90E",
			fontSize: 40,
			maxHeight: 100,
			width: 100,
			borderRadius: 50,
			marginTop: "120%",
			marginLeft: "35%",
			marginRight: "37%",
			paddingTop: "1.5%",
			paddingRight: "10%",
		}
	},

	timer: {
		view: {
			flex: 1,
			zIndex: -100,
			paddingLeft: "7%",
			paddingRight: "7%",
			alignItems: "center",
		},
		workbg: {
			backgroundColor: '#001230',
		},

		breakbg: {
			backgroundColor: "#141C0E",
		},
		text: {
			marginTop: "40%",
			fontFamily: "Inter-SemiBold",
			fontSize: 24,
			letterSpacing: -0.5,
			color: "#FFF"
		},
		work: {
			fontFamily: "Inter-SemiBold",
			fontSize: 100,
			letterSpacing: -7,
			color: "#6BCFFF",
		},
		break: {
			fontFamily: "Inter-SemiBold",
			fontSize: 100,
			letterSpacing: -7,
			color: "#B7FF81",
		},
	},
})