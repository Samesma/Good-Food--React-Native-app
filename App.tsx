/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './Screens/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RestList from './Screens/RestList';
import { Tab, TabView } from 'react-native-elements';
import Details from './Screens/Details';
import FoodOrder from './Screens/FoodOrder';
import Account from './Screens/Account';

const Stack = createNativeStackNavigator();
const App = () => {

  return (


 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#add8e6',
          }
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />

        <Stack.Screen
          name="RestList"
          component={RestList}
          options={{
            title: "Restaurants List",
          }}
  />
          <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Restaurant's Menu",
          }}

          />
           <Stack.Screen
          name="FoodOrder"
          component={FoodOrder}
          options={{
            title: "FoodOrder",
          }}

          />
           <Stack.Screen
          name="Account"
          component={Account}
          options={{
            title: "Account",
          }}

          />

      </Stack.Navigator>
     
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
