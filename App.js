/* Module Imports */
import React, {useState, useEffect,} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'
import {NumpadButton, SymbolButton} from './inputButton'
import {Numpad} from './numpad'

export default function App(props) {
  return (
    <View style={styles.container}>
    <Numpad />
    </View>
  );
}