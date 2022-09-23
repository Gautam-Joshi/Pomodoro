import React, { useReducer } from 'react';
import { View } from 'react-native';
import Animated, {Keyframe, Easing, FadeOut } from 'react-native-reanimated';

/* Component, Styles and Animation imports */
import { TimerLabel } from './timerLabel'
import { Numpad } from './numpad'
import { NumberDisplay } from './numberDisplay'
import { SymbolButton } from './inputButton'
import { StateButton } from './actionButton'
import { styles } from './stylesheet'
import { fadeOutKey } from './animations';

/* Function Imports */
import {secondconv} from "./timeFns"

/* Make Time Dispatch context */
export const TimeDispatch = React.createContext(null);

/* Primitive Time Reducer */
export function timeSet(timestate, action) {

	/* Load Count Variable Based on Mode */
	if (timestate.mode === "work") {
		count = timestate.workCount
	} else {
		count = timestate.breakCount
	}

  switch (action.type) {
		case 'switch':
			if(timestate.mode === "work") {
				return {
					mode: "break",
					workCount: timestate.workCount,
					breakCount: timestate.breakCount,
				}
			} else {
				return {
					mode: "work",
					workCount: timestate.workCount,
					breakCount: timestate.breakCount,
				}
			}

    case 'increment':
      if(count.toString().length > 5){
        count = Number(count)
				break
      }

      if(Number(count) === 0){
        count = Number(action.value)
				break
      }

			count = Number(count.toString() + action.value.toString())
			break

		case 'decrement':
      count = Number(count.toString().substr(0,count.toString().length - 1))
			break
		}

	/* Return changed count variable based on Mode */
	if (timestate.mode === "work") {
		return({
			mode: timestate.mode,
			workCount: count,
			breakCount: timestate.breakCount
		})
	} else {
		return({
			mode: timestate.mode,
			workCount: timestate.workCount,
			breakCount: count
		})
	}
}

export function AltTimeSet() {

  const [timestate, dispatch] = useReducer(timeSet, {mode: "work", workCount: 0, breakCount: 0})

  return(
    <View style={styles.Parent.backgroundContainer}>
      <View style={styles.Parent.container}>
        <TimeDispatch.Provider value={dispatch}>
					<Animated.View exiting={FadeOut}>
					{timestate.mode === "work"
						? <TimerLabel title={timestate.mode} />
						: <TimerLabel title={timestate.mode} />
					}
					</Animated.View>
					<NumberDisplay
						display = {
							timestate.mode === "work" ? timestate.workCount : timestate.breakCount
						}/>

					<Numpad />

					{ timestate.mode === "work"
						? <SymbolButton
									style = {styles.button.circular.navigateNext}
									symbol = "navigate-next"
									size = {30}
									actionType = "switch"
								/>
						: <View
								style={{
									flexDirection: "row",
									justifyContent: "space-between"
							}}>
								<SymbolButton
									style = {styles.button.circular.navigateBefore}
									symbol = "navigate-before"
									size = {30}
									actionType = "switch"
									context="TimeDispatch"
								/>
								<StateButton
									style ={styles.button.circular.done}
									symbol = "done"
									size = {30}
									screen = "Transient"
									params = {{
										workCount: secondconv(timestate.workCount),
										breakCount: secondconv(timestate.breakCount)}}
								/>
							</View>
					}
        </TimeDispatch.Provider>
      </View>
    </View>
  )
}
