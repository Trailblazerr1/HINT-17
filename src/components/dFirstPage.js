import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class DonateFormOne extends Component {
    onButtonPress1() {
        console.log('Yayy1');
    }

    onButtonPress2() {
        console.log('Yayy2');
    }

    render() {
        return (
            <View style={styles.viewStyle} >
            <Button 
                style={styles.moneyStyle} 
                title="Money"
                color="#000000"
                onPress={this.onButtonPress1}
            />
            <Button
                style={styles.kindStyle} 
                title="Kind"
                color="#000000"
                onPress={this.onButtonPress2}
            />
            </View>
            );
    }
}

const styles = {
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    moneyStyle: {
                padding: 50
    },
    kindStyle: {
            padding: 50
    }
};
export default DonateFormOne;
