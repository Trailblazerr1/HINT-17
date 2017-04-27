import React, {
    Component
} from 'react';
import {
    ListView,
    Text,
    View,
    Image,
    FlatList
} from 'react-native';
import {
  Container,
  Content,
  CardItem,
  Body,
  Card,
  Left,
  Right,
  Thumbnail,
  H1,
  H3,
  Icon,
  Button,
  Fab
} from 'native-base';
import {
    connect
} from 'react-redux';
import axios from 'axios';
import {
    CardSection
} from './cardSection';
import {
    fetchData
} from '../actions';



class showProfile extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.email);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }

    componentDidUpdate() {
      console.log(typeof this.props.pList);
    }

    renderRow(data) {
        return ( 
            <Card style={{ opacity: 0.9 }}>
                <CardItem  style={{ justifyContent: 'space-between', paddingTop: 1, paddingBottom:1 }}>
                        <Text>
                            {data.to}                                     
                        </Text>
                      <Button transparent>
                          <Icon active name="thumbs-up" />
                          <Text>{data.status}</Text>
                      </Button>
                </CardItem>
                <CardItem content style={{ justifyContent: 'space-between', paddingTop: 1 }}>
                        <Text>
                            {data.date}                                    
                        </Text>
                        <Text>
                            5 pm
                        </Text>
                </CardItem>
            </Card>
        );
    }


    render() {
      console.log(this.props.pList);
        if (this.props.pList) {
            return ( 
              <Container>
                <Content>
                    <Card >
                        <CardItem style={{ justifyContent: 'space-around' }}>
                                <Thumbnail source={{ uri: 'https://cdn1.iconfinder.com/data/icons/ninja-things-1/1772/ninja-simple-512.png' }} />
                                <Body style={{ paddingLeft: 35 }}>
                                    <H3 style={{ padding: 7 }}>
                                        {this.props.iData.username}
                                    </H3>
                                    <Text style={{ padding: 7 }}>
                                        {this.props.iData.email}
                                    </Text>
                                </Body>
                        </CardItem>
                    </Card>

        
        <Card style={{ backgroundColor: '#82B1FF' }}>
        <ListView dataSource={this.ds.cloneWithRows(this.props.iData.previous_donation)}
                renderRow={this.renderRow.bind(this)}
          />
          </Card>
              <Fab
                  active={this.state.active}
                  direction="right"
                  containerStyle={{ marginLeft: 10 }}
                  style={{ backgroundColor: '#5067FF' }}
                  position="topLeft"
                  onPress={() => this.setState({ active: !this.state.active })}>
                  <Icon name="share" />
                  <Button style={{ backgroundColor: '#34A34F' }}>
                      <Icon name="logo-whatsapp" />
                  </Button>
                  <Button style={{ backgroundColor: '#3B5998' }}>
                      <Icon name="logo-facebook" />
                  </Button>
                  <Button disabled style={{ backgroundColor: '#DD5144' }}>
                      <Icon name="mail" />
                  </Button>
              </Fab>
          </Content>
      </Container>
            );
        }
        return ( 
          <View >
            <Text >
            Coming soon </Text>
          </View>
        );
    }
}

const styles = {
    vcontainer: {
        backgroundColor: 'grey'
    },
    container: {
        backgroundColor: 'black',
        marginTop: 0.1,
        marginHorizontal: 0.1,
    },
    image: {
        width: 200,
        height: 200,
    },
    textStyle1: {
        fontSize: 18,
        padding: 15,
        backgroundColor: 'transparent'
    },
    textStyle2: {
        fontSize: 18,
        padding: 15,
        color: 'white',
        backgroundColor: 'transparent'
    }
};

const mapStateToProps = state => {
    console.log( state.auth);
    return {
        pList: state.auth.pData,
        email: state.auth.email,
        iData: state.auth.initData
    };
};

export default connect(mapStateToProps, {
    fetchData
})(showProfile);