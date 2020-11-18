import React, { Component, Fragment } from 'react'
import {useState } from "react";
// import { Picker} from "react-native";
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
  Picker
} from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class DetailsEducation extends Component {
    constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['STT', 'Mã học phần', 'Tên học phần', 'Số tín chỉ', 'Năm học' ],
      DataTable: [
        ['1', 'CF121', 'Cấu trúc dữ liệu', '3', '2019-2020'],
        ['2', 'CF301','Ngôn ngữ hình thức', '3', '2019-2020'],
        ['3', 'MI312','Đồ họa', '2', '2019-2020 '],
        ['4', 'MA110','Giải tích', '3', '2019-2020']
      ]
    }
  }
  render() {
      const state = this.state;
      // const [selectedValue, setSelectedValue] = useState("java");
      return (      
        <ScrollView style={styles.container}>

          <Text style={{fontSize:27, marginBottom: 30, fontWeight:"bold", textAlign:"center"}}>Danh sách giáo viên</Text>
          <Table borderStyle={{borderWidth: 1, borderColor: 'black'}}>
            <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
            <Rows data={state.DataTable} textStyle={styles.TableText}/>
          </Table>
        </ScrollView>
      )
    }
};


  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 18,
      paddingTop: 35,

    },
    HeadStyle: { 
      height: 50,
      alignContent: "center",
 
    },
    TableText: { 
      margin: 10
    }
  });