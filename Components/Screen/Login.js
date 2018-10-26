import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {firebaseApp} from '../firebaseConfig';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    dangNhap() {
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
                'Alert Title',
                'Dang nhap thanh cong: '+this.state.email,
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.navigate('welcomeScreen')},
                ],
                { cancelable: false }
            )
            this.setState({
                email: '',
                password: ''
            })
        })

        .catch(function(error) {
            Alert.alert(
                'Alert Title',
                'Dang nhap that bai',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.navigate('homeScreen')},
                ],
                { cancelable: false }
            )
        });
    }
    render() {
        return (
            <View style={styles.viewCompo}>
                <TextInput
                    style={{width:300, height: 40, borderColor: '#00688B', borderWidth: 1}}
                    onChangeText={(email) => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    style={{width:300, height: 40, borderColor: '#00688B', borderWidth: 1}}
                    secureTextEntry = {true}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                />
                <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={{backgroundColor: '#00688B', padding: 10}}
                        onPress = {()=>{this.dangNhap()}}
                    >
                        <Text style={{color: 'white'}}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{backgroundColor: '#00688B', padding: 10}}
                        onPress = {()=>{this.props.navigation.navigate('registerScreen')}}
                    >
                        <Text style={{color: 'white'}}>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    viewCompo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00688B'
    }
})