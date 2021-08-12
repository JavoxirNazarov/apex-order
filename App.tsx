import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/screens/Home';
import Product from './src/screens/Product';
import UserInfo from './src/screens/UserInfo';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import appStyles from './src/constants/styles';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {}, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        translucent
        animated={true}
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
              <Stack.Screen name="user-info" component={UserInfo} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
  },
  container: {
    flex: 1,
    backgroundColor: appStyles.BACKGROUND_DEFAULT,
  },
});

export default App;
