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

class EducationProgram extends Component {
  constructor(props) {
    super(props)
    this.state = {
      educationProgram: [],
    }
      
  }

  componentDidMount() {
    fetch("https://edu-ms.herokuapp.com/api/v1/mon-hoc")
      .then(res => res.json())
      .then(data => {
          
          this.setState({
              educationProgram: data
          })
      })
      .catch(error => console.log('An error occured ', error))
  }

  componentWillUnmount() {
    this.setState({
      educationProgram: []
    })
  }
  renderTableData() {
    return this.state.educationProgram.map((subject) => {
     
      if (typeof(subject) !== 'undefined') {
        return <Text>{`${subject.maMon} - ${subject.tenMon} - ${subject.soTinChi} - ${subject.hocPhanTienQuyet} - ${subject.soGio} - ${subject.heSo}`}</Text>          
      }
    })
  }

  renderTableHeader() {
    const header = Object.keys(this.state.educationProgram[1])
    return header.map((key, index) => <th key={index}>{key.toUpperCase()}</th>)
  }


  render() {
   
    return (
      <ScrollView> 
        <StatusBar hidden />
        <Text style={{fontSize:27, marginBottom: 30, fontWeight:"bold", textAlign:"center"}}>Chương trình đào tạo</Text>
        { this.renderTableData() }
      </ScrollView>  
    )
  }
}

export default EducationProgram
