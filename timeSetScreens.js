import React, { useReducer } from 'react';
import { View } from 'react-native';
import { styles } from './stylesheet'

/* Component Imports */
import { TimerLabel } from './timerLabel'
import { Numpad } from './numpad'
import { NumberDisplay } from './numberDisplay'
import { StateButton } from './actionButton'

/* Make Time Dispatch context */
export const TimeDispatch = React.createContext(null);

/* Primitive Time Reducer */
export function timeSet(timestate, action) {

  /* Return Object! */
  switch (action.type) {
    case 'increment':
      if(timestate.count.toString().length > 5){
        return {count:Number(timestate.count)}
      }

      if(Number(timestate.count) === 0){
        return {count:Number(action.value)}
      }

      return {count: Number(timestate.count + action.value)}
    case 'decrement':
      return {count: Number(timestate.count.toString().substr(0,timestate.count.toString().length - 1))}
  }
}

export function WorkSet({ navigation, route }) {

  const [timestate, dispatch] = useReducer(timeSet, {count: 0})
  const labelType = route.params.labelType

  return(
    <View style={styles.Parent.backgroundContainer}>
      <View style={styles.Parent.container}>
        <TimeDispatch.Provider value={dispatch}>
          <TimerLabel title={labelType} />
          <NumberDisplay display={timestate.count} />
          <Numpad />
        </TimeDispatch.Provider>
        <StateButton
          style ={styles.button.circular.navigateNext}
          symbol = "navigate-next" screen="BreakSet"
          navigation={navigation}
          />
      </View>
    </View>
  )
}

export function BreakSet({ navigation, route }) {

  const [timestate, dispatch] = useReducer(timeSet, {count: 0})
  const labelType = route.params.labelType

  return(
    <View style={styles.Parent.backgroundContainer}>
      <View style={styles.Parent.container}>
        <TimeDispatch.Provider value={dispatch}>
          <TimerLabel title={labelType} />
          <NumberDisplay display={timestate.count} />
          <Numpad />
        </TimeDispatch.Provider>

				<View
				  style={{
						flexDirection: "row",
						justifyContent: "space-between"
					}}>
					<StateButton
						style ={styles.button.circular.navigateBefore}
						symbol = "navigate-before" screen="WorkSet"
						navigation={navigation}
						/>
					<StateButton
						style ={styles.button.circular.done}
						symbol = "done" screen="StartBuffer"
						navigation={navigation}
						/>
				</View>
      </View>
    </View>
  )
}
