
import React from 'react'
import { StyleSheet,Image, Text, TextInput, View, Button } from 'react-native'

export default class Login extends React.Component {
  state = { account: '', password: '', errorMessage: null }
  handleLogin = (event) => {
    event.preventDefault();
    const data = {
        username: this.state.username,
        password: this.state.password
    }


}
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.imageStyle}
             source={{uri: 'https://upload.wikimedia.org/wikipedia/vi/a/ad/LogoTLU.jpg'}}>
        </Image>
        <Text style={{fontSize:27, marginBottom: 30, fontWeight:"bold"}}>Quản lý chương trình đào tạo</Text>
        <Text style={{fontSize:25, marginBottom: 20}}>Đăng nhập</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Tên đăng nhập"
          onChangeText={account => this.setState({ account })}
          value={this.state.account}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Mật khẩu"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <View style={{marginTop:20, width: 100}}>
            <Button title="Login" style={styles.buttonStyle} onPress={this.handleLogin} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 8,
    paddingLeft: 10,
    borderRadius: 5
  },
  imageStyle:{
    width: 200, height: 200
  },
})