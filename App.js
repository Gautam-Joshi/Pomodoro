/* Module Imports */
import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WorkSet, BreakSet } from './timeSetScreens'

/* Create Navigation Stack */
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
          gestureEnabled: false,
        }}>

        <Stack.Screen
          name="WorkSet"
          component={WorkSet}
          initialParams={{labelType: "work",}}
          />

        <Stack.Screen
          name="BreakSet"
          component={BreakSet}
          initialParams={{labelType: "break",}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
