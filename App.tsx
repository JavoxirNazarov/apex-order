import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import appStyles from './src/constants/styles';
import Main from './src/screens/Main';
import MainIcon from './src/assets/icons/tabs/Main';
import BasketIcon from './src/assets/icons/tabs/Basket';
import ContactIcon from './src/assets/icons/tabs/Contacts';
import ProfileIcon from './src/assets/icons/tabs/Profile';
// import Product from './src/screens/Product';
import Basket from './src/screens/Basket';

const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* <Product /> */}
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: appStyles.COLOR_PRIMARY,
            inactiveTintColor: '#C1C1CC',
            labelStyle: {fontSize: 12, fontFamily: appStyles.FONT},
            tabStyle: {
              height: '90%',
            },
            style: {
              height: 65,
              backgroundColor: '#F7F7F8',
            },
          }}>
          <Tab.Screen
            name="main"
            options={{
              tabBarLabel: 'Меню',
              tabBarIcon: ({color}) => <MainIcon fill={color} />,
            }}
            component={Main}
          />
          <Tab.Screen
            name="basket"
            options={{
              tabBarLabel: 'Корзина',
              tabBarIcon: ({color}) => <BasketIcon fill={color} />,
            }}
            component={Basket}
          />
          <Tab.Screen
            name="contacts"
            options={{
              tabBarLabel: 'Контакты',
              tabBarIcon: ({color}) => <ContactIcon fill={color} />,
            }}
            component={Main}
          />
          <Tab.Screen
            name="profile"
            options={{
              tabBarLabel: 'Профиль',
              tabBarIcon: ({color}) => <ProfileIcon fill={color} />,
            }}
            component={Main}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#F7F7F8',
  },
});

export default App;
