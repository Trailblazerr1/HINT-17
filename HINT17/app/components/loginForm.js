import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, Thumbnail } from 'native-base';
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
        //console.warn(this.props.iData.user_type);
        if (this.props.success===true) {
            if(this.props.iData.user_type==1) {
                Actions.donateNow();
            }
            else {
                Actions.nprofile();
            }
        }
    }

    render() {
        return (
            <Container style={{ marginTop: 80}}>
                <Content>
                <Thumbnail source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bf8d937548807.57444c965c84b.jpg' }} large style={{ marginLeft: 130}}/>
                    <Form style={{ backgroundColor: 'white'}}>
                        <Item style={{ marginTop: 20}} rounded danger>
                            <Input
                                label="Email"
                                placeholder="    Username"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}         
                            />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  last >
                            <Input
                            secureTextEntry={true}
                            label="Password"
                            placeholder="Password"
                            onChangeText={this.onPassChange.bind(this)}
                            value={this.props.password}
                             />
                        </Item>
                    </Form>
                    
                    <Button  onPress={this.onButtonPress.bind(this)}
                            style={{ marginTop: 20 }}rounded danger block>
                        <Text style={{ fontSize: 17 }}>Log In</Text>
                    </Button>
                   <Button onPress={() => Actions.signUp()} 
                   style={{ marginTop: 30}} rounded transparent block>
                        <Text>Create My Account</Text>
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
    return {
        email: state.auth.email,
        password: state.auth.password,
        success: state.auth.success,
        iData: state.auth.initData
    };                                                          
}; 

export default connect(mapStateToProps, { emailChanged, passChanged, loginUser })(LoginForm); 
