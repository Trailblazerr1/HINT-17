import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card } from './card';
import { CardSection } from './cardSection';
import { Input } from './input';


class kindForm extends Component {
    onButtonPress1() {
        console.log('Yayy1');
    }

    onButtonPress2() {
        console.log('Yayy2');
    }

    render() {
        return (
        <Card>
            <CardSection>
              <Input
                label="Type"
                placeholder="Clothings, Food, Books"
                onChangeText={this.onButtonPress1.bind(this)}
              />
            </CardSection>

            <CardSection>
              <Input
                label="Description"
                placeholder="For children"
                onChangeText={this.onButtonPress1.bind(this)}

              />
            </CardSection>
            
            <CardSection>
                <Button 
                    title="Donate"
                    color="#000000"
                    onPress={() => console.warn('dd')}
                />
            </CardSection>
        </Card>
            );
    }
}


export default kindForm;
