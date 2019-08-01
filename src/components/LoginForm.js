import React, { Component } from 'react';
import * as firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    loginPressed() {
        this.setState({error: '', loading: true});
        const { email, password } = this.state;
        console.log('Button pressed.');
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({
            error: 'Authentication fail',
            loading: false,
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false,
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.loginPressed.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        value={ this.state.email }
                        onChangeText={email => this.setState({ email })}
                        label="Email"
                        placeholder="user@example.com"
                        />
                </CardSection>
                <CardSection>
                <Input
                        value={ this.state.password }
                        secureTextEntry={true}
                        onChangeText={password => this.setState({ password })}
                        label="Password"
                        placeholder="password"
                        />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                { this.state.error ? <Text style={styles.errorStyle}>
                    {this.state.error}
                </Text> : null}
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorStyle: {
        fontSize: 20,
        color: '#f00',
        alignSelf: 'center',
    },
});
export default LoginForm;

