/* Module Imports */
import React, {useState, useEffect,} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'

import {TimerLabel} from './timerLabel'
import {Numpad} from './numpad'
import {NumberDisplay} from './numberDisplay'
import {SymbolButton} from './inputButton'

export default function App(props) {
  return (
    <>
    <View style={styles.Parent.backgroundContainer}>
      <View style={styles.Parent.container}>
        <TimerLabel/>
        <NumberDisplay/>
        <Numpad/>
        <SymbolButton style={styles.button.circular} name="navigate-next"/>
      </View>
    </View>
    </>
  );
}