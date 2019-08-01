// Import libraries
import React from 'react';
import { Text, View, Platform } from 'react-native';

// Make component.
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
    <View style={viewStyle}>
        <Text style={textStyle}>{ props.headerText }</Text>
    </View>);
};

// Styling
const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        ...Platform.select(
            {
                ios: {
                    paddingTop: 15,
                    height: 60,
                },
                android: {
                    height: 40,
                },
            }
        ),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 5, // Shadow props do nothing on Android. Elevation causes a shadow on Android.
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
    },
};

// Make component available to other parts of the app
export { Header };
