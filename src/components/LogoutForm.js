import React from 'react';
import * as firebase from 'firebase';
import { Text, StyleSheet } from 'react-native';
import { Card, CardSection, Button } from './common';

const LogoutForm = () => {
    return (
        <Card>
            <CardSection>
                <Text style={styles.textStyle}>Place actual app here.</Text>
            </CardSection>
            <CardSection>
                <Button
                    onPress={() => firebase.auth().signOut()}
                >Log out</Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        fontSize: 20,
    },
});

export default LogoutForm;
