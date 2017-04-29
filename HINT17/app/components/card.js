import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, Left, Body, Right, ListItem, Thumbnail, Text } from 'native-base';

class SideCard extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <ListItem thumbnail>
                        <Left>
                            <Thumbnail square size={80} source={{ uri: 'https://cdn1.iconfinder.com/data/icons/navigation-and-ui-menu/32/negative_pending_neutral_circle_loading-128.png'}} />
                        </Left>
                        <Body>
                            <Text>Sankhadeep</Text>
                            <Text note>Its time to build a difference . .</Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>View</Text>
                            </Button>
                        </Right>
                    </ListItem>
                </Content>
            </Container>
        );
    }
}

const styles = {
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { SideCard };
