/* Module Imports */
import React, {useState, useEffect,} from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'

export default function App(props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.textStyles.timerCategoryLabel, styles.textStyles.workSet]}>
      Work{"\n"}Minutes
      </Text>
      <Text style={[styles.textStyles.timerCategoryLabel, styles.textStyles.breakSet]}>
      Break{"\n"}Minutes
      </Text>
    </View>
  );
}