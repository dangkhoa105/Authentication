import React, {Component} from 'react';
import {StackNavigator} from 'react-navigation';
import Welcome from './Screen/Welcome';
import Login from './Screen/Login';
import Register from './Screen/Register';

export const Router = StackNavigator ({
    homeScreen: {
        screen: Login
    },
    registerScreen: {
        screen: Register
    },
    welcomeScreen: {
        screen: Welcome
    }
}) 