import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <TextInput
                        value={ this.state.text }
                        onChangeText={text => this.setState({ text: text })}
                        style={ styles.TextInput }
                        editable={true} />
                </CardSection>
                <CardSection />
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

const styles={
    TextInput: {
        height: 20,
        width: 100,
        color: '#000',
        paddingBottom: 0,
        paddingTop: 0,
    },
};
