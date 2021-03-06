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
import { emailChanged, passChanged, loginUser } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPassChange(text) {
        this.props.passChanged(text);
    }

    onButtonPress() {
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

            // axios.get('http://35.166.45.231:8080/login?user_email=' + this.props.email + '&password=' + this.props.password)
            //   .then(function (response) {
            //     console.log(response);
            //     if (response.data.success == 'False') {
            //         Actions.donateNow();
            //     }
            //   })
            //   .catch(function (error) {
            //         Actions.donateNow();
            //   });
        const { email, password } = this.props;
        console.log(email, password);
        this.props.loginUser({ email, password });
    }

    componentDidUpdate() {
        if (this.props.success===true) {
            Actions.donateNow();
        }
    }

    render() {
        console.log('rendering.....')
        return (
    <View style={styles.container}>
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


            <Button 
                style={styles.btnStyle}
                title="Log In"
                color="#841584"
                onPress={this.onButtonPress.bind(this)}
            />

            <Button 
                style={styles.btnStyle}
                title="Sign Up"
                color="#F44336"
                onPress={() => Actions.signUp()}
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
        password: state.auth.password,
        success: state.auth.success
    };                                                          
}; 

export default connect(mapStateToProps, { emailChanged, passChanged, loginUser })(LoginForm); 
