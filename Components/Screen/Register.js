import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Alert} from 'react-native';
import {firebaseApp} from '../firebaseConfig';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    dangKy() {
        firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(()=>{
            Alert.alert(
                'Alert Title',
                'Dang ky thanh cong: '+this.state.email,
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => this.props.navigation.navigate('homeScreen')},
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
                'Dang ky that bai',
                [
                  {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
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
                <TouchableOpacity style={{backgroundColor: '#00688B', padding: 10}}
                    onPress = {()=>{this.dangKy()}}
                >
                        <Text style={{color: 'white', textAlign: 'center', justifyContent: 'center'}}>Register</Text>
                </TouchableOpacity>
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