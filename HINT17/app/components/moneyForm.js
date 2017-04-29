import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './cardSection';
import { descChanged, typeChanged } from '../actions';

//1 m 2 f c b amount
class moneyForm extends Component {

    onTypeChange(text) {
        this.props.typeChanged(text);
    }

    onDesChange(text) {
        this.props.descChanged(text);
    }

    onButtonPress3() {
        console.log(this.props.description);
        axios.get('http://35.166.45.231:8001/donate?donation_type=1&donation_description='+this.props.description+'&donation_amount='+this.props.type+'&donation_to=udaan')
          .then(function (response) {
                console.warn(response);
                Actions.profile();
            })
            .catch(function (error) {
                console.warn(error);
            });
    }

    render() {
              return (
            <Container style={{ flex: 1}}>
            <Image source={{ uri: 'http://cdn9.staztic.com/app/a/3807/3807627/blur-wallpaper-10-1-s-307x512.jpg' }} style={styles.imgBack}>
                <Content>
                <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/business-charts/512/earnings-512.png' }} large style={{ marginLeft: 130}}/>
                    <Form >
                        <Item style={{ marginTop: 20}} rounded success>
                            <Input
                                label="Amount"
                                placeholder="  Amount"
                                onChangeText={this.onTypeChange.bind(this)}
                                value={this.props.type}   
        
                            />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success >
                            <Input
                            label="Description"
                            placeholder="Description"
                            onChangeText={this.onDesChange.bind(this)}
                            value={this.props.description}
                            />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success >
                            <Input
                            label="NGO"
                            placeholder="NGO"
                            />
                        </Item>
                    </Form>
                    
                    <Button  onPress={this.onButtonPress3.bind(this)}
                            style={{ marginTop: 20 }}rounded danger block>
                        <Text style={{ fontSize: 17 }}>Donate</Text>
                    </Button>
                </Content>
                </Image>
            </Container>
        );
    }
}

const styles = {
    imgBack: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around'
    }
};

const mapStateToProps = state => {
     //   console.warn(state.auth);
    return {
        type: state.auth.type,
        description: state.auth.description
    };                                                          
}; 

export default connect(mapStateToProps, { typeChanged, descChanged })(moneyForm); 
