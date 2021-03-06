import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle} >
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        flex: 1, // Full width.
        alignSelf: 'stretch',
        // backgroundColor: '#ddffdd',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#44ff44',
        marginLeft: 5,
        marginRight: 5,
    },
    textStyle: {
        alignSelf: 'center',
        color: '#00dd00',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
};

export { Button };
