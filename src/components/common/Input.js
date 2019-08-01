import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const Input= ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>
                {label}
            </Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                autoCapitalize={'none'}
                placeholder={placeholder}
                placeholderTextColor={'#888'}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle}
                />
        </View>
    );
};

const styles=StyleSheet.create({
    inputStyle: {
        color: '#000',
        backgroundColor: '#ddd',
        paddingHorizontal: 5,
        paddingBottom: 1,
        paddingTop: 1,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1,
        textAlign: 'right',
        paddingRight: 5,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});

export { Input };
