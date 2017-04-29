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
import { contChanged, dateChanged, recChanged } from '../actions';

class acceptForm extends Component {
    onReceiverChange(text) {
        this.props.recChanged(text);
    }

    onDateChange(text) {
        this.props.dateChanged(text);
    }

    onContactChange(text) {
        this.props.contChanged(text);
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

        axios.get('http://35.166.45.231:8001/donate_accept?donation_id='+this.props.ids+'&donation_reciever='+this.props.receiver+'&time='+this.props.date+'&donation_mobile='+this.props.contact)
          .then(function (response) {
                Actions.nprofile3();
          })
          .catch(function (error) {
                console.log(error);
          });
    };

    render() {
        console.log(this.props.ids);
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
                                onChangeText={this.onReceiverChange.bind(this)}
                                value={this.props.receiver}   
                            />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success >
                            <Input
                            label="Date and Time"
                            placeholder="    Date and Time"
                                onChangeText={this.onDateChange.bind(this)}
                                value={this.props.date}   
                             />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success last >
                            <Input
                            label="Phone no."
                            placeholder="Phone no."
                                onChangeText={this.onContactChange.bind(this)}
                                value={this.props.contact}   
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
        contact: state.auth.contact,
        receiver: state.auth.receiver,
        date: state.auth.date
    };                                                          
}; 

export default connect(mapStateToProps, { recChanged, dateChanged, contChanged })(acceptForm); 
