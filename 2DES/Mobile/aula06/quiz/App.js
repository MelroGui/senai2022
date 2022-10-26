import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/home/Home';
import Q1 from './src/pages/quests/Q1';
import Q2 from './src/pages/quests/Q2';
import Q3 from './src/pages/quests/Q3';
import Q4 from './src/pages/quests/Q4';
import Q5 from './src/pages/quests/Q5';
import result from './src/pages/quests/result';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Q1" component={Q1} />
        <Stack.Screen name="Q2" component={Q2} />
        <Stack.Screen name="Q3" component={Q3} />
        <Stack.Screen name="Q4" component={Q4} />
        <Stack.Screen name="Q5" component={Q5} />
        <Stack.Screen name="result" component={result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;