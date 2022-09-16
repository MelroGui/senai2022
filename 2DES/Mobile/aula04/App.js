import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import primeira from './src/pages/primeiro';
import Segunda from './src/pages/segunda';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="primeira" component={primeira}/>
            <Stack.Screen name="segunda" component={segunda}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}