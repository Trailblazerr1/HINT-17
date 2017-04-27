import React, { Component } from 'react';
import {
    View,
    Image
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, Thumbnail } from 'native-base';
import { CardSection } from './cardSection';
import { emailChanged, passChanged } from '../actions';

class acceptForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPassChange(text) {
        this.props.passChanged(text);
    }

    onButtonPress = () => {

        // fetch('http://35.166.45.231:8080/login', {  
        //   method: 'POST',
        //  headers: {
        //     'Accept': '*/*  ',
        //     'Content-Type': 'application/json',
        //     },
        //     body:"user_email=anurag@anurag.com&password=asdfqwer",
        //   // body: JSON.stringify({
        //   //   user_email: 'anurag@anurag.com',
        //   //   password: 'asdfqwer',
          
        // })
        // .then(response => console.log(response))
        // .catch((error) => console.warn(error))

        axios.get('http://35.166.45.231:8080/login?user_email=' + this.props.email + '&password=' + this.props.password)
          .then(function (response) {
            console.log(response);
                Actions.nprofile2();
          })
          .catch(function (error) {
                Actions.nprofile2();
          });
    };

    render() {
        return (
            <Container style={{ flex: 1}}>
            <Image source={{ uri: 'http://cdn9.staztic.com/app/a/3807/3807627/blur-wallpaper-10-1-s-307x512.jpg' }} style={styles.imgBack}>
                <Content>
                <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/rewards-1/512/present-512.png' }} large style={{ marginLeft: 120}}/>
                    <Form >
                        <Item style={{ marginTop: 20}} rounded success>
                            <Input
                                label="Receiver"
                                placeholder="    Receiver"
        
                            />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success >
                            <Input
                            label="Date n Time"
                            placeholder="Date n Time"

                             />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success last >
                            <Input
                            label="Phone no."
                            placeholder="Phone no."

                             />
                        </Item>
                    </Form>
                    
                    <Button  onPress={this.onButtonPress.bind(this)}
                            style={{ marginTop: 20 }}rounded danger block>
                        <Text style={{ fontSize: 17 }}>Accept</Text>
                    </Button>
                </Content>
                </Image>
            </Container>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    btnStyle: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    },
        imgBack: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };                                                          
}; 

export default connect(mapStateToProps, { emailChanged, passChanged })(acceptForm); 
