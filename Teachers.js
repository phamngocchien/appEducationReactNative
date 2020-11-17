import React, { Component, Fragment } from 'react'
import Nav from "./Nav"
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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Teachers extends Component {
    constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['STT', 'Họ và tên', 'Ma giáo viên', 'Địa chỉ', 'Số điện thoại', 'Email', 'Bộ môn'],
      DataTable: [
        ['1', 'Nguyễn Thu Phương', 'CDL006', '30 Bạch Mai', '093288764', 'Nguyenthuphuong@gmail.com','Tin học'],
        ['2', 'Nguyễn Thu Trang', 'CDL007', '301 Bạch Mai', '093288764', 'Nguyenthutrang@gmail.com','Toán'],
        ['4', 'Nguyễn Thu Chang', 'CDL008', '302 Bạch Mai', '093288764', 'Nguyenthuchang@gmail.com','Anh '],
        ['4', 'Nguyễn Thu Thanh', 'CDL009', '305 Bạch Mai', '093288764', 'Nguyenthuthanh@gmail.com','STVB'],
        ['5', 'Nguyễn Thu Chi', 'CDL010', '301 Bạch Mai', '093288764', 'Nguyenthuchi@gmail.com','Thể dục']
      ]
    }
  }
  render() {
      const state = this.state;
      return (
        <View style={styles.container}>
          <Table borderStyle={{borderWidth: 1, borderColor: '#ffa1d2'}}>
            <Row data={state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
            <Rows data={state.DataTable} textStyle={styles.TableText}/>
          </Table>
        </View>
      )
    }
};


  const styles = StyleSheet.create({
    container: { 
      flex: 1,
      padding: 18,
      paddingTop: 35,
      backgroundColor: '#ffffff' 
    },
    HeadStyle: { 
      height: 50,
      alignContent: "center",
      backgroundColor: '#ffe0f0'
    },
    TableText: { 
      margin: 10
    }
  });