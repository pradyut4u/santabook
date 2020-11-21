import React from 'react'
import {View, TouchableOpacity, Text, TextInput, StyleSheet, Alert} from 'react-native'
import firebase from 'firebase'
import db from '../config.js'

export default class Welcome extends React.Component{
constructor(){
	super()
	this.state={
	  email: "",
	  password: ""
	}
}

usersignup = (email,password) => {
console.log('signup')
	firebase.auth().createUserWithEmailAndPassword(email,password).then(response=>{return alert("User account is created")}).catch(
		function(error){
			return alert(error.message)
		}
	)
}

userloginin = (email,password) => {
	firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{return alert("User account is created")}).catch(
		function(error){
			return alert(error.message)
		}
	)
}

	render(){
		return(
		<View>
		  <TextInput placeholder="E mail" keyboardType='email.address' onChangeText={item=>{this.setState({email : item})}} style={ss.tinput}/>
		  <TextInput placeholder="Password" secureTextEntry={true} onChangeText={item=>{this.setState({password : item})}} style={ss.tinput}/>
		  <TouchableOpacity style={ss.button} onPress = {() => {this.userloginin(this.state.email,this.state.password)}}>
		  <Text>Login</Text>
		  </TouchableOpacity>

		  <TouchableOpacity style={ss.button} onPress = {() => {this.usersignup(this.state.email,this.state.password)}}>
		  <Text>Signin</Text>
		  </TouchableOpacity>
		</View>
		)
	}
}

const ss = StyleSheet.create({
tinput:{
 backgroundColor : 'cyan',
 borderWidth : 5,
 marginTop : 20,
 width : 200,
 height : 50
},
button:{
	backgroundColor : 'green',
	borderRadius : 50,
	width : 100,
	height : 30,
	alignItems : "center",
	marginTop : 30
}
})