import React, { Component } from 'react';
import { Button, Image } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { Card } from './card';
import { CardSection } from './cardSection';
import { Input } from './input';
import { descChanged, typeChanged } from '../actions';

//1 m 2 f c b amount
class moneyForm extends Component {

    onButtonPress1(text) {
        this.props.typeChanged(text);
    }

    onButtonPress2(text) {
        this.props.descChanged(text);
    }

    onButtonPress3() {
        console.log(this.props.descriptionn);
        axios.get('http://35.166.45.231:8080/donate?type=2&description=heybaby&amount=68')
          .then(function (response) {
                console.log(response.data.success);
                Actions.profile();
            })
            .catch(function (error) {
                console.log(error);
                Actions.profile();
            });
    }

    render() {
        return (
        <Image source={{ uri: 'http://www.refilwe.org/wp-content/uploads/rankingclass.com-charity-donation.jpg' }} style={styles.imgBack}>
            <Card>
                <CardSection>
                  <Input
                    label="Amount"
                    placeholder="Rupees 1000"
                    onChangeText={this.onButtonPress1.bind(this)}
                    value={this.props.typee}
                  />
                </CardSection>

                <CardSection>
                  <Input
                    label="Description"
                    placeholder="For children"
                    onChangeText={this.onButtonPress2.bind(this)}
                    value={this.props.descriptionn}
                  />
                </CardSection>

            </Card>
                    <Button 
                        title="Donate"
                        color="#F44336"
                        onPress={this.onButtonPress3.bind(this)}
                    />
    </Image>
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
        typee: state.auth.type,
        descriptionn: state.auth.description
    };                                                          
}; 

export default connect(mapStateToProps, { typeChanged, descChanged })(moneyForm); 
