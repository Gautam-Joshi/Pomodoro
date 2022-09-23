import { Keyframe, Easing } from "react-native-reanimated"

export const fadeOutKey = new Keyframe({
	0: {
		opacity: 1,
	},

	100: {
		opacity: 0,
		easing: Easing.bezier(0, 0, 0.5, 1)
	},
}).duration(300)