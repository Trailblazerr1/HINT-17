import React from 'react';
import {
  View,
} from 'react-native';

const CardSection = (props) => {
    return (
            <View style={style.ViewStyle}>
                {props.children}
            </View>
        );
};

const style = {
    ViewStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export {CardSection};
