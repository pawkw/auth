import React, { Component } from 'react';
// import { StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

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
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}
export default LoginForm;

