/* Module Imports */
import React, {useState, useEffect,} from 'react';
import { Button, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View,
} from 'react-native';

/* Custom Imports */
import {styles} from './stylesheet'

export default function NumpadButton(props) {
	return <Button /*onPress={Send Activation Event Back}*/ styles="">{props.number.toString()}</Button>
}