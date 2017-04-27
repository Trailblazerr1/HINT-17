import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card } from './card';
import { CardSection } from './cardSection';
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
        return (
            <Container style={{ paddingTop: 100}}>
                <Content>
                    <Form style={{ backgroundColor: 'white'}}>
                        <Item inlineLabel underline>
                            <Icon active name='home' />
                            <Input
                             placeholder="Username"
                             />
                        </Item>
                        <Item style={{ paddingTop: 20}} inlineLabel  last>
                            <Input
                            secureTextEntry={true}
                            label="Password"
                            placeholder="Password"
                            onChangeText={this.onPassChange.bind(this)}
                             />
                        </Item>
                    </Form>
                    
                    <Button  rounded style={{ marginLeft: 130 }}>
                        <Text>Log In</Text>
                    </Button>
                   <Button rounded style={{ marginLeft: 130 }}>
                        <Text>Sign Up</Text>
                    </Button>
                </Content>
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
    }
};

const mapStateToProps = state => {
    console.log(state.auth);
    return {
        email: state.auth.email,
        password: state.auth.password,
        success: state.auth.success
    };                                                          
}; 

export default connect(mapStateToProps, { emailChanged, passChanged, loginUser })(LoginForm); 
