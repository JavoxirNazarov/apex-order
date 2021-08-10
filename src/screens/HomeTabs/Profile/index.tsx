import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Addresses from './Addresses';
import History from './History';
import Owner from './Owner';
import Settings from './Settings';

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home/profile/me" component={Owner} />
      <Stack.Screen name="home/profile/history" component={History} />
      <Stack.Screen name="home/profile/addresses" component={Addresses} />
      <Stack.Screen name="home/profile/settings" component={Settings} />
    </Stack.Navigator>
  );
}
