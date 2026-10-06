import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Cidadededeus from './favoritos/Cidadededeus';
import Homemaranhasemvoltaparacasa from './favoritos/Homemaranhasemvoltaparacasa';
import Shrekterceiro from './favoritos/Shrekterceiro';
import Vingadoresguerrainfinita from './favoritos/Vingadoresguerrainfinita';
import Favoritos from './pages/Favoritos';

const Stack= createStackNavigator();

export default function RotasButtomFavoritos(){
  return(
<Stack.Navigator>
    <Stack.Screen name="Favoritos" component={Favoritos} options={{headerShown:false}} />
    <Stack.Screen name="Cidadededeus" component={Cidadededeus} options={{ title: "Cidade de Deus"}}/>
    <Stack.Screen name="Homemaranhasemvoltaparacasa" component={Homemaranhasemvoltaparacasa} options={{ title: "Homem Aranha: Sem Volta para Casa "}}/>
    <Stack.Screen name="Shrekterceiro" component={Shrekterceiro} options={{ title: "Shrek Terceiro"}}/>
    <Stack.Screen name="Vingadoresguerrainfinita" component={Vingadoresguerrainfinita} options={{ title: "Vingadores Guerra Infinita"}}/>
  </Stack.Navigator>
  );
}