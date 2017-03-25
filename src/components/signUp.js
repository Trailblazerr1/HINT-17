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

class SignUpForm extends Component {
    onEmailChange(text) {
    }

    onPassChange(text) {
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
            if (response.data.success == 'True') {
                Actions.donateNow();
            }
          })
          .catch(function (error) {
                Actions.nprofile();
          });
    };

    render() {
        return (
    <View style={styles.container}>
    <Card>
            <CardSection>
          <Input
            label="First Name"
            placeholder="Sherlock"
            onChangeText={this.onPassChange.bind(this)}
          />
        </CardSection>
            <CardSection>
          <Input
            label="Last Name"
            placeholder="Holmes"
            onChangeText={this.onPassChange.bind(this)}
          />
        </CardSection>
        <CardSection>
          <Input
            label="User Name"
            placeholder="BakerBoy"
            onChangeText={this.onPassChange.bind(this)}

          />
        </CardSection>

        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Type"
            placeholder="NGO/ Individual"
            onChangeText={this.onEmailChange.bind(this)}
          />
        </CardSection>

        <CardSection>
          <Input
          secureTextEntry
            label="Password"
            placeholder="sshhhh!"
            onChangeText={this.onPassChange.bind(this)}
          />
        </CardSection>


            <Button 
                style={styles.btnStyle}
                title="Sign Up"
                color="#F44336"
                        onPress={() => Actions.login()}            />
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

export default connect(mapStateToProps, { emailChanged, passChanged })(SignUpForm); 
