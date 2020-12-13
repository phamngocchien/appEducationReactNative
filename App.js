import React, { Component, Fragment } from 'react'
import {
  TouchableOpacity,
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
} from 'react-native';
import Login from './Login';
import Nav from "./Nav";
import Subjects from "./Subject"
import EducationProgram from './EducationProgram'
import Teachers from "./Teachers"
import DetailsEducation from "./DetailsEducation"
import {StackNavigator} from "react-navigation"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class App extends Component {
  render() { 
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Nav" component={Nav} />
        <Stack.Screen name="Subjects" component={Subjects} />
          <Stack.Screen name="Teachers" component={Teachers} />
          <Stack.Screen name="EducationProgram" component={EducationProgram} />
          <Stack.Screen name="DetailsEducation" component={DetailsEducation} />
      </Stack.Navigator>
    </NavigationContainer>   
    )
  }
}


const Stack = createStackNavigator();

export default App