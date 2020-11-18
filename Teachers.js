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
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
export default class Teachers extends Component {
    constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['STT', 'Họ và tên', 'Mã giáo viên', 'Bộ môn'],
      DataTable: [
        ['1', 'Nguyễn Thu Phương', 'CDL006', 'Tin học'],
        ['2', 'Nguyễn Thu Trang', 'CDL007', 'Toán'],
        ['3', 'Nguyễn Thu Chang', 'CDL008', 'Anh '],
        ['4', 'Nguyễn Thu Thanh', 'CDL009', 'STVB'],
        ['5', 'Nguyễn Thu Chi', 'CDL010', 'Thể dục'],
        ['6', 'Nguyễn Thu Bình', 'CDL011', 'STVB']
      ]
    }
  }
  render() {
      const state = this.state;
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