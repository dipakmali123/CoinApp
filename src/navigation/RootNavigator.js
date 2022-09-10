import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import {QueryClient, QueryClientProvider} from 'react-query';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import SplashScreen from '../screens/SplashScreen';
import WalletScreen from '../screens/WalletScreen';
import CartScreen from '../screens/CartScreen';

import GlobalState from '../context/GlobalState';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const RootNavigator = () => {
  console.log('DDDDDD');
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide()}>
      <GlobalState>
        <QueryClientProvider client={queryClient}>
          <Stack.Navigator
            screenOptions={{headerShown: true, headerTitleAlign: 'center'}}>
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerBackVisible: false,
                headerRight: props => <CartScreen />,
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailScreen}
              initialParams={{post: {}}}
            />
            <Stack.Screen name="Wallet" component={WalletScreen} />
            <Stack.Screen name="Cart" component={CartScreen} />
          </Stack.Navigator>
        </QueryClientProvider>
      </GlobalState>
    </NavigationContainer>
  );
};

export default RootNavigator;
