import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.viewCompo}>
                <Text style={{fontSize: 50, textAlign: 'center'}}>Welcome to Firebase</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    viewCompo: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        alignItems: 'center'
    }
})