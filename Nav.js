import React, { Component, Fragment } from 'react'
// import { createStackNavigator } from 'react-navigation'
import Subjects from "./Subject"
import EducationProgram from "./EducationProgram"
import Teachers from "./Teachers"
import DetailsEducation from "./DetailsEducation"
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

export default function App2() {
  return (
      <Stack.Navigator>
          <Stack.Screen name="Nav" component={Nav} />
          <Stack.Screen name="Subjects" component={Subjects} />
          <Stack.Screen name="Teachers" component={Teachers} />
          <Stack.Screen name="EducationProgram" component={EducationProgram} />
          <Stack.Screen name="DetailsEducation" component={DetailsEducation} />
      </Stack.Navigator>
  );
  }
class Nav extends Component {
  render() { 
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30,paddingTop: 30, fontWeight:"bold", textAlign:"center"}}>Thăng Long University</Text>
        <Text style={{fontSize:25,paddingTop: 30, marginBottom: 30, fontWeight:"bold", textAlign:"center"}}>Danh mục</Text>
        <View style={styles.buttonStyle}>
          <Button title="Quản lý môn học" style={styles.buttonStyle} onPress={() => this.props.navigation.navigate("Subjects")} ></Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Quản lý Giáo viên" style={styles.buttonStyle} onPress={() => this.props.navigation.navigate("Teachers")}></Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Quản lý đề cương chi tiết" style={styles.buttonStyle} onPress={() => this.props.navigation.navigate("DetailsEducation")}></Button>
        </View>
        <View style={styles.buttonStyle}>
          <Button title="Quản lý Chương trình đào tạo" style={styles.buttonStyle} onPress={() => this.props.navigation.navigate("EducationProgram")}></Button>
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

const Stack = createStackNavigator();
