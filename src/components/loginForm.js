import React, { Component } from 'react';
import {
    Button
} from 'react-native';
import { connect } from 'react-redux';
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
        fetch('http://172.20.53.17:8080/login', {  
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstParam: this.props.email,
            secondParam: this.props.password,
          })
        })
        .then(response => response.json() )
        .catch((error) => console.warn("fetch error:", error))
            //  this.wait(700);
        .then( jsonData => {
                console.log(jsonData);
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
