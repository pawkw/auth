import React, { Component } from 'react';
import firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: 'Authentication fail'});
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={ this.state.email }
                        secureTextEntry={false}
                        onChangeText={text => this.setState({ email: text })}
                        label="Email"
                        placeholder="user@example.com"
                        />
                </CardSection>
                <CardSection>
                <Input
                        value={ this.state.password }
                        secureTextEntry={true}
                        onChangeText={text => this.setState({ password: text })}
                        label="Password"
                        placeholder="password"
                        />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress(this)}>
                        Log in
                    </Button>
                </CardSection>
                <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 28,
        color: '#f00',
        backgroundColor: '#fdd',
        alignSelf: 'center',
    },
});
export default LoginForm;

