import React, {
    Component
} from 'react';
import {
    ListView,
    TouchableOpacity,
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
  Form,
  Item,
  Input,
  Thumbnail,
  H1,
  H3,
  Icon,
  Button,
  Spinner, List, ListItem
} from 'native-base';
import {
    connect
} from 'react-redux';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
    CardSection
} from './cardSection';
import { SideCard }
from './card';
import {
    fetchData
} from '../actions';

let comp = 0;
let pend = 0;

class showProfile extends Component {

    componentDidMount() {
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }


    renderRow(data) {
      console.log(data.status);
      if(data.status=="Pending") {
        return ( 
          <ListItem onPress={() => Actions.acceptForm({ids: data.id})} >
              <Body>
                  <Text style={{fontWeight:'bold'}}>{data.to}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text note>{data.date.split(' ')[0]}</Text>
                    <Text note>{data.date.split(' ')[1].split('.')[0]}</Text>
                  </View>
              </Body>
              <Thumbnail small source={{ uri: 'https://cdn1.iconfinder.com/data/icons/navigation-and-ui-menu/32/negative_pending_neutral_circle_loading-128.png'}} />
          </ListItem>
        );
      }
      else {
                return ( 
          <ListItem onPress={() => Actions.acceptForm({ids: data.id})} >
              <Body>
                  <Text style={{fontWeight:'bold'}}>{data.to}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text note>{data.date.split(' ')[0]}</Text>
                    <Text note>{data.date.split(' ')[1].split('.')[0]}</Text>
                  </View>
              </Body>
              <Thumbnail small source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Icons8_flat_ok.svg/2000px-Icons8_flat_ok.svg.png'}} />
          </ListItem>
        );
      }
    }


    render() {
      console.log();
        if (this.props.pList) {
            return ( 
            <Container style={{ marginTop: 80}}>
                <Content>
                <Thumbnail source={{ uri: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0bf8d937548807.57444c965c84b.jpg' }} large style={{ marginLeft: 130}}/>
                    <Form style={{ backgroundColor: 'white'}}>
                        <Item style={{ marginTop: 20}} rounded danger>
                            <Input
                                label="Name"
                                placeholder="    Name of event"        
                            />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  last >
                            <Input
                            secureTextEntry={true}
                            label="Venue"
                            placeholder="Venue"
                             />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  last >
                            <Input
                            secureTextEntry={true}
                            label="Purpose"
                            placeholder="Purpose"
                             />
                        </Item>
                    </Form>
                    
                    <Button  
                            style={{ marginTop: 20 }}rounded danger block>
                        <Text style={{ fontSize: 17 }}>Create Event!</Text>
                    </Button>
                </Content>
            </Container>
            );
        }
        return ( 
            <Container>
                <Content>
                    <Spinner color='red' />
                </Content>
            </Container>
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
    },
        imgBack: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around'
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