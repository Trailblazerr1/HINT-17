import React, { Component } from 'react';
import {
    View
} from 'react-native';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, Thumbnail, Drawer } from 'native-base';
import axios from 'axios';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Card } from './card';
import { CardSection } from './cardSection';
import { emailChanged, passChanged, loginUser, typeChanged } from '../actions';

class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPassChange(text) {
        this.props.passChanged(text);
    }

    onTypeChanged(text) {
        this.props.typeChanged(text);
    }

    onButtonPress() {
        console.log(this.props);
        axios.get('http://35.166.45.231:8001/signup?username=asdf&user_email='+this.props.email+'&user_fname=as&user_lname=df&user_gender=m&user_type='+this.props.type+'&user_password='+this.props.password)
          .then(function (response) {
                Actions.login();
          })
          .catch(function (error) {
                Actions.login();
          });

    }

    componentDidUpdate() {
        if (this.props.success===true) {
                Actions.login();
            }
    }

    render() {
        return (
            <Container style={{ marginTop: 10}}>
                <Content>
                <Thumbnail source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bf8d937548807.57444c965c84b.jpg' }} large style={{ marginLeft: 130}}/>
                    <Form>
                        <Item style={{ marginTop: 20}} rounded danger>
                            <Input
                                label="Username"
                                placeholder="    Username"       
                        />
                        </Item>

                        <Item style={{ marginTop: 20}} rounded danger>
                            <Input
                                label="Email"
                                placeholder="    Email"
                                onChangeText={this.onEmailChange.bind(this)}
                                value={this.props.email}         
                            />
                        </Item>

                        <Item style={{ marginTop: 20}} rounded danger>
                            <Input
                                label="Name"
                                placeholder="    First name"         
                            />
                        </Item>

                        <Item style={{ marginTop: 20}} rounded danger>
                            <Input
                                label="Name"
                                placeholder="    Last name"         
                            />
                        </Item>

                         <Item style={{ marginTop: 20}} rounded danger>
                            <Input
                                label="Type"
                                placeholder="    Type (1.User, 2.NGO)" 
                                onChangeText={this.onTypeChanged.bind(this)}
                                value={this.props.type}          
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
                        <Text style={{ fontSize: 17 }}>Create Account</Text>
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
        success: state.auth.success,
        type: state.auth.type
    };                                                          
}; 

export default connect(mapStateToProps, { emailChanged, passChanged, loginUser, typeChanged })(LoginForm); 
