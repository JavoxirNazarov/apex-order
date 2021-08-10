import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Location from './Location';
import Locations from './Locations';

const Stack = createNativeStackNavigator();

export default function Contacts() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home/contacts/locations" component={Locations} />
      <Stack.Screen name="home/contacts/location" component={Location} />
    </Stack.Navigator>
  );
}
