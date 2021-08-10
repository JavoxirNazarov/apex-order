import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import BasketIcon from '../assets/icons/tabs/Basket';
import ContactIcon from '../assets/icons/tabs/Contacts';
import MainIcon from '../assets/icons/tabs/Main';
import ProfileIcon from '../assets/icons/tabs/Profile';
import appStyles from '../constants/styles';
import Basket from './HomeTabs/Basket';
import Contacts from './HomeTabs/Contacts';
import Main from './HomeTabs/Main';
import Profile from './HomeTabs/Profile';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: appStyles.COLOR_PRIMARY,
        tabBarInactiveTintColor: '#C1C1CC',
        tabBarLabelStyle: {fontSize: 12, fontFamily: appStyles.FONT},
        tabBarItemStyle: {
          height: '90%',
        },
        tabBarStyle: {
          height: 65,
          backgroundColor: '#F7F7F8',
        },
      }}>
      <Tab.Screen
        name="home/main"
        options={{
          tabBarLabel: 'Меню',
          tabBarIcon: ({color}) => <MainIcon fill={color} />,
        }}
        component={Main}
      />
      <Tab.Screen
        name="home/basket"
        options={{
          tabBarLabel: 'Корзина',
          tabBarIcon: ({color}) => <BasketIcon fill={color} />,
        }}
        component={Basket}
      />
      <Tab.Screen
        name="home/contacts"
        options={{
          tabBarLabel: 'Контакты',
          tabBarIcon: ({color}) => <ContactIcon fill={color} />,
        }}
        component={Contacts}
      />
      <Tab.Screen
        name="home/profile"
        options={{
          tabBarLabel: 'Профиль',
          tabBarIcon: ({color}) => <ProfileIcon fill={color} />,
        }}
        component={Profile}
      />
    </Tab.Navigator>
  );
}
