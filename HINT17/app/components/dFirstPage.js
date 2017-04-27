import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { Container, Content, Button, Text, Thumbnail } from 'native-base';
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
<Container>
                <Content>
                    <Button light rounded>
                        <Text>Money</Text>
                    </Button>
                   <Button light rounded>
                    <Thumbnail source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bf8d937548807.57444c965c84b.jpg' }} />
                        <Text>Kind</Text>
                    </Button>
                </Content>
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
        opacity: 0.8
    },
    kindStyle: {
            padding: 50
    }
};
export default DonateFormOne;
