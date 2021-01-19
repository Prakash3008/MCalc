import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import dateConv from './Dev/dateConv';
import calcVal from './Dev/calcVal';
import currWord from './Dev/currWord';
import calcSet from './Dev/calcSet';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Nav = createMaterialBottomTabNavigator();
class App extends Component{
  render(){
    return(
      <NavigationContainer activeColor="#f0edf6"
        inactiveColor="#3e2465">
      <Nav.Navigator>
        <Nav.Screen name="Date" component={dateConv}
          options={{
          tabBarLabel: 'Date',
          tabBarIcon: ({}) => (
            <FontAwesome5 name="ruler" size={24} color="black" />
          ),
        }}
        /> 
        <Nav.Screen name="Math" component={calcVal}
          options={{
            tabBarLabel: 'Math',
            tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="decimal" size={24} color="black" />
          ),
          }}
        />
        <Nav.Screen name="Set" component={calcSet}
          options={{
          tabBarLabel: 'Set',
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="set-all" size={24} color="black" />
          ),
        }}
        />
        <Nav.Screen name="Currency" component={currWord}
          options={{
          tabBarLabel: 'Currency',
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="currency-usd-circle" size={24} color="black" />
          ),
        }}
        />
      </Nav.Navigator>
    </NavigationContainer>
    )
  }
}
export default App;