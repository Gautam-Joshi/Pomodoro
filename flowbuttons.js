/* Module Imports */
import React, {useState, useEffect} from 'react';
import { View, Text, Pressable
} from 'react-native';

/* Custom Imports */
import {NumpadButton, SymbolButton} from './inputButton'

export function NextButton() {
	return (
		<SymbolButton innertext="navigate-next"/>
	);
}