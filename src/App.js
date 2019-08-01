import React, { Component } from 'react';
import { View, Keyboard } from 'react-native';
import * as firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import LogoutForm from './components/LogoutForm';

class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {
            Keyboard.dismiss();
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (<LogoutForm />);
            case false:
                return (<LoginForm />);
            default:
                return (
                    <View style={{marginTop: 40, justifyContent: 'space-around'}}>
                        <Spinner size="large" />
                    </View>
                );
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}
export default App;
