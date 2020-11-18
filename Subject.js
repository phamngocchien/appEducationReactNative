import React, { Component, Fragment } from 'react'
// import { createStackNavigator } from 'react-navigation';
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
  ListItem,
  Table,
  Row,
  Rows
} from 'react-native';

class Subjects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // tableHead: ["Mã môn", "tên môn"],
      subjects: [],
    }
      
  }

  componentDidMount() {
    fetch("https://edu-ms.herokuapp.com/api/v1/mon-hoc")
      .then(res => res.json())
      .then(data => {
          
          this.setState({
              subjects: data
          })
      })
      .catch(error => console.log('An error occured ', error))
  }

  componentWillUnmount() {
    this.setState({
      subjects: []
    })
  }
  renderTableData() {
    return this.state.subjects.map((subject) => {
     
      if (typeof(subject) !== 'undefined') {
        return <Text>{`${subject.maMon} - ${subject.tenMon}`}</Text>          
      }
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.subjects[1])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }


  render() {
   
    return (
      <ScrollView style={{paddingLeft:15}}> 
        <Text style={{fontSize:27, marginBottom: 30, fontWeight:"bold", textAlign:"center"}}>Danh sách môn học</Text>
        <StatusBar hidden />
        { this.renderTableData() }
        {/* <Table borderStyle={{borderWidth: 2, borderColor: 'black'}}>
          <Row data={this.state.tableHead} />
          <Rows data={this.renderTableData()}/>
        </Table> */}
      </ScrollView>  
    )
  }
}

export default Subjects