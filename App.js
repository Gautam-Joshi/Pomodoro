/* Module Imports */
import React, { useReducer } from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';
import { styles } from './stylesheet'

/* Component Imports */
import { TimerLabel } from './timerLabel'
import { Numpad } from './numpad'
import { NumberDisplay } from './numberDisplay'
import { SymbolButton } from './inputButton'

/* Make Time Dispatch context */
export const TimeDispatch = React.createContext(null);


export default function App() {

  const [timestate, dispatch] = useReducer(timeSet, {count: 0})

  /* Primitive Time Reducer */
  function timeSet(timestate, action) {
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

  return (
    <View style={styles.Parent.backgroundContainer}>
      <View style={styles.Parent.container}>
        <TimeDispatch.Provider value={dispatch}>
          <TimerLabel/>
          <NumberDisplay display={timestate.count}/>
          <Numpad/>
        </TimeDispatch.Provider>
        <SymbolButton style={styles.button.circular.navigateNext} name="navigate-next"/>
      </View>
    </View>
  );
}
