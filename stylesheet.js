import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

	/* Text Styles */
	text:{
		timerCategoryLabel: {
			fontFamily: "Inter-SemiBold",
			fontSize: 20,
		},
		workSet: {
			color:"#B6E5FF",
		},
		breakSet: {
			color:"#D7FFA5",
		},
	},

	/* Button Styles */
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
			paddingLeft: "43%",
			paddingBottom: "20%",
			fontFamily: "Inter-Regular",
			fontSize: 30,
		},
		symbolText: {
			paddingLeft: "43%",
			paddingBottom: "20%",
			fontFamily: "Inter-Regular",
			fontSize: 30,
			color: "#000",
		},
	},
})