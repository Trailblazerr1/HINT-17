import React, { Component } from 'react';
import {
    Button,
    View
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card } from './card';
import { CardSection } from './cardSection';
import { Input } from './input';
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
    <View style={styles.container}>
    <Card>
        <CardSection>
          <Input
            label="Receiver"
            placeholder="Abhishek Singhal"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Date and Time"
            placeholder="26/03/2017 19:20"
            onChangeText={this.onPassChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Contact no."
            placeholder="+91-9876543210"
            onChangeText={this.onPassChange.bind(this)}
          />
        </CardSection>

            <Button 
                style={styles.btnStyle}
                title="Accept!"
                color="#841584"
                onPress={this.onButtonPress}
            />

    </Card>
    </View>
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
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };                                                          
}; 

export default connect(mapStateToProps, { emailChanged, passChanged })(acceptForm); 
