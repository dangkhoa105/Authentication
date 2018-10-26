import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Home from './Welcome';
import Login from './Login';
import Register from './Register';
import {Router} from '../Router';

export default class Main extends Component {
    render() {
        return (
            <Router />
        );
    }
}
