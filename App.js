import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import TabOne from './src/screens/TabOne';
import TabTwo from './src/screens/TabTwo';
import TabThree from './src/screens/TabThree';
import TabFour from './src/screens/TabFour';

const screenOptions = {
  // headerTitleAlign: 'center',
  // headerStyle: {
  //   backgroundColor: colors.schedule_blue,
  // },
  // headerTintColor: 'white',
  headerShown: false
};


const TabOneStack = createNativeStackNavigator();

function TabOneStackScreen() {
  return (
    <TabOneStack.Navigator initialRouteName="Tab1" screenOptions={screenOptions}>
      <TabOneStack.Screen name="Tab1" component={TabOne} />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createNativeStackNavigator();

function TabTwoStackScreen() {
  return (
    <TabTwoStack.Navigator initialRouteName="Tab2" screenOptions={screenOptions}>
      <TabTwoStack.Screen name="Tab2" component={TabTwo} />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createNativeStackNavigator();

function TabThreeStackScreen() {
  return (
    <TabThreeStack.Navigator initialRouteName="Tab3" screenOptions={screenOptions}>
      <TabThreeStack.Screen name="Tab3" component={TabThree} />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createNativeStackNavigator();

function TabFourStackScreen() {
  return (
    <TabFourStack.Navigator initialRouteName="Tab4" screenOptions={screenOptions}>
      <TabFourStack.Screen name="Tab4" component={TabFour} />
    </TabFourStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="Tab1"
      activeColor='red'
      barStyle={{backgroundColor: 'white', borderWidth: 0.15,paddingBottom: 2}}>
        <Tab.Screen name="Tab1" component={TabOneStackScreen}   options={{
          tabBarLabel: 'Tab1',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Tab2" component={TabTwoStackScreen} options={{
          tabBarLabel: 'Tab2',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="filter-list" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Tab3" component={TabThreeStackScreen} options={{
          tabBarLabel: 'Tab3',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="filter-list" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Tab4" component={TabFourStackScreen} options={{
          tabBarLabel: 'Tab4',
          tabBarIcon: ({color}) => (
            <MaterialIcons name="filter-list" size={24} color={color} />
          ),
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}