import React, { Component } from 'react';
import {
    Button
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card } from './card';
import { CardSection } from './cardSection';
import { Input } from './input';
import { emailChanged, passChanged } from '../actions';

class LoginForm extends Component {
    componentWillMount() {
            console.log(this.props);
    }

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
        console.log('http://35.166.45.231:8080/login?user_email=' + this.props.email + '&password=' + this.props.password);
                axios.get('http://35.166.45.231:8080/login?user_email=' + this.props.email + '&password=' + this.props.password)
                  .then(function (response) {
                    if (response.data.success == 'True') {
                        Actions.donateNow();
                    }
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
    };

    render() {
        return (
    <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPassChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>


        <CardSection>
            <Button 
                style={styles.btnStyle}
                title="Log In"
                color="#000000"
                onPress={this.onButtonPress}
            />
        </CardSection>
    </Card>
        );
    }
}

const styles = {
    btnStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
};

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password
    };                                                          
}; 

export default connect(mapStateToProps, { emailChanged, passChanged })(LoginForm); 
