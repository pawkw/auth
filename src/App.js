import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyB_l7grbKktK75jVVHOUbkI-SDrMCTkYD8',
            authDomain: 'auth-15fdf.firebaseapp.com',
            databaseURL: 'https://auth-15fdf.firebaseio.com',
            projectId: 'auth-15fdf',
            storageBucket: '',
            messagingSenderId: '509192538775',
            appId: '1:509192538775:web:f7d4bb72c642067f',
          });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <Text>
                    An App.
                </Text>
            </View>
        );
    }
}
export default App;
