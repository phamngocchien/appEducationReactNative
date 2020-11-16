import React, { Component, Fragment } from 'react'
// import { createStackNavigator } from 'react-navigation'
import Subjects from "./Subject"
import educationProgram from "./EducationProgram"
import {StackNavigator} from "react-navigation"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
  FlatList, 
  Button
} from 'react-native';

  function App2() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Subjects" component={Subjects} />
          <Stack.Screen name="EducationProgram" component={EducationProgram} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

export default class Nav extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30,paddingTop: 30, fontWeight:"bold", textAlign:"center"}}>Thăng Long University</Text>
        <Text style={{fontSize:25,paddingTop: 30, marginBottom: 30, fontWeight:"bold", textAlign:"center"}}>Danh mục</Text>
        <View style={styles.buttonStyle}>
          <Button name="aa" title="Quản lý môn học" style={styles.buttonStyle} onPress={() => this.props.navigation.navigate("Subjects")} ></Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Quản lý Giáo viên" style={styles.buttonStyle}></Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Quản lý đề cương chi tiết" style={styles.buttonStyle} onPress={() => this.props.navigation.navigate("EducationProgram")}></Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Quản lý Chương trình đào tạo" style={styles.buttonStyle}></Button>
        </View>
      </View>     
      
    )
  }
}
const styles = StyleSheet.create({
  container:{
    margin: 20,
  },
  buttonStyle:{
    padding: 6,
  }

})
