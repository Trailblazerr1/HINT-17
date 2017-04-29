import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Button, Text, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';

class DonateFormOne extends Component {

    render() {
        return (
            <Container style={{ flex: 1}}>
            <Image source={{ uri: 'http://cdn9.staztic.com/app/a/3807/3807627/blur-wallpaper-10-1-s-307x512.jpg' }} style={styles.imgBack}>
                <Content>

                <Content style={{ marginTop: 50 }}>
                         <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/business-charts/512/earnings-512.png' }} large style={{ marginLeft: 120}} square size={180}/>
                        <Button style={{ marginLeft: 120}} light rounded onPress={() => Actions.moneyForm()}>
                            <Text>Money</Text>
                        </Button>
                    </Content>
                    <Content style={{ marginTop: 140 }}>
                         <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/rewards-1/512/present-512.png' }} large style={{ marginLeft: 120}} square size={180}/>
                       <Button style={{ marginLeft: 120}}  light rounded onPress={() => Actions.kindForm()}>
                            <Text>Kind</Text>
                        </Button>
                    </Content>
                    
                </Content>
                </Image>
            </Container>

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
        opacity: 1,
        backgroundColor:'transparent'
    },
    kindStyle: {
            padding: 50
    }
};
export default DonateFormOne;
