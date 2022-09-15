/* Module Imports */
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AltTimeSet } from './altTimeSet'
import { Transient } from './altTransient'

/* Create Navigation Stack */
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Set"
        screenOptions = {{
          headerShown: false,
      }}>
        <Stack.Screen
          name="Set"
          component={ AltTimeSet }
        />
        <Stack.Screen
          name="Transient"
          component={ Transient }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
