import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';

const Stack = createStackNavigator();

export default function RotasButtomHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TelaHome"
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}