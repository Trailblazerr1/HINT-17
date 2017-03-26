import React, { Component } from 'react';
import { View, Text, Button,Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
                <Image source={{ uri: 'http://www.refilwe.org/wp-content/uploads/rankingclass.com-charity-donation.jpg' }} style={styles.imgBack}>
                <View style={styles.btnView}>
                    <Button 
                        style={styles.moneyStyle} 
                        title="Money"
                        color="#F44336"
                        onPress={() => Actions.moneyForm()}
                    />
                    <Button
                        style={styles.kindStyle} 
                        title="Kind"
                        color="#F44336"
                        onPress={() => Actions.kindForm()}
                    />
                </View>
                </Image>
            </View>
            );
    }
}

const styles = {
    viewStyle: {
        flex: 1,
        backgroundColor: '#333',
        justifyContent: 'space-around'
    },
    moneyStyle: {
        height: 100

    },
    btnView: {
        justifyContent: 'space-around',
        flex: 2
    },
    imgBack: {
        flex: 1,
        padding: 20,
        opacity: 0.8
    },
    kindStyle: {
            padding: 50
    }
};
export default DonateFormOne;
