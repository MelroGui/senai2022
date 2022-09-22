import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import primeiro from './src/pages/primeiro/index.js';
import segundo from './src/pages/segundo/index.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Primeiro" component={primeiro}/>
            <Stack.Screen name="Segundo" component={segundo}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}