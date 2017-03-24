import React, { Component } from 'react';
import { Button } from 'react-native';
import { Card } from './card';
import { CardSection } from './cardSection';
import { Input } from './input';

class moneyForm extends Component {
    render() {
        return (
        <Card>
            <CardSection>
              <Input
                label="Amount"
                placeholder="5000"

              />
            </CardSection>

            <CardSection>
              <Input
                label="Description"
                placeholder="For childern"

              />
            </CardSection>
        </Card>
            );
    }
}


export default moneyForm;
