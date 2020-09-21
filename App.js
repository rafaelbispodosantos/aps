import React, { Component } from 'react'
import { View, KeyboardAvoidingView, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'

import ImagePicker from 'react-native-image-picker'
export default class App extends Component {
  state = {

    nome: '',
    email: '',
    password: '',
    confimrPassword: '',
    stageNew: false,
    image: null
  }
  pickImage = () => {
    ImagePicker.showImagePicker({
      title: 'Escolha a imagem',
      maxHeight: 600,
      maxWidth: 800

    }, res =>{
      if (!res.didCancel){
        this.setState({image: {uri: res.uri, base64: res.data}})
      }

    })
  }
  render() {

    return (

      <KeyboardAvoidingView style={styles.background}>
        <View style={styles.containerLogo}>
          <Image
            source={require('./assets/imgs/iconLogin.jpg')}
          />
        </View>

        <View style={styles.cantainer}>
          <Text style={styles.subtitle}>
            {this.state.stageNew ? 'Crie sua conta' : 'Informe seus Dados'}
          </Text>
          {this.state.stageNew &&
            <TextInput style={styles.input}
              placeholder="Nome" value={this.state.nome}
              autoCorrect={false}
              onChangeText={() => { nome => this.setState({ nome }) }}
            />}
            
          

            <TextInput style={styles.input}
              placeholder="Email" value={this.state.email}
              autoCorrect={false}
              onChangeText={() => { email => this.setState({ email }) }}
            />


            <TextInput style={styles.input}
              placeholder="Senha" value={this.state.password}
              autoCorrect={false} secureTextEntry={true}
              onChangeText={() => { password => this.setState({ password }) }}
            />

            {this.state.stageNew &&
            <TextInput style={styles.input}
            placeholder="Confirmação de senha" value={this.state.confimrPassword}
            autoCorrect={false} secureTextEntry={true}
            onChangeText={() => { confimrPassword => this.setState({ confimrPassword }) }}
          />
            
            }
          

            <TouchableOpacity style={styles.btnSubmit}>
              <Text style={styles.submitText}>
          {this.state.stageNew ? 'Registra' : 'Entra'}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnRegister}>
              <Text style={styles.registerText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>

          
    </KeyboardAvoidingView>
  )
}
}

const styles = StyleSheet.create({
          background: {
          flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "black"
  },
  containerLogo: {
          flex: 1,
    justifyContent: 'center'
  },
  cantainer:{
    backgroundColor: 'rgba(0,0,0, 0.8)',
          flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    
    paddingBottom: 20
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    alignItems: 'center',
    marginBottom: 10


  },
  input: {
          backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius:7,
    padding: 10
  },
  btnSubmit: {
          backgroundColor: '#080',
    width: '90%',
    height: 45,
    alignItems: 'center',
    borderRadius: 7,

  },
  submitText:{
          color: '#fff',
    fontSize: 18

  },
  btnRegister: {
          marginTop:10,
  },
  registerText: {
          color: '#fff'

  },
  buttonFoto: {
    marginTop:30,
    padding: 10,
    backgroundColor: '#4286f4'
  }
 

})