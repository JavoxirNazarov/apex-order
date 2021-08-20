import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  SafeAreaView,
} from 'react-native';
import appStyles from './src/constants/styles';
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import UserInfo from './src/screens/UserInfo';
import FlashMessage from 'react-native-flash-message';
import Map from './src/screens/Map';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        translucent
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <View style={styles.container}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                contentStyle: { backgroundColor: appStyles.BACKGROUND_DEFAULT },
              }}>
              <Stack.Screen name="home" component={Home} />
              <Stack.Screen name="product" component={Product} />
              <Stack.Screen name="authorization" component={UserInfo} />
              <Stack.Screen name="map" component={Map} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
        <FlashMessage position="top" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
  },
});

export default App;
