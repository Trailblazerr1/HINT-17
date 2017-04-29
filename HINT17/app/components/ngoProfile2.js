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
import {
    fetchData
} from '../actions';

let comp = 0;
let pend = 0;

class showProfile extends Component {

    componentDidMount() {
        this.props.fetchData(this.props.email);
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
            return ( 
            <Container>
                <Content>
<ListItem thumbnail>
                        <Left>
                            <Thumbnail square size={80} source={{ uri: 'http://s1.evcdn.com/images/block250/fallback/event/categories/fundraisers/fundraisers_default_1.jpg'}} />
                        </Left>
                        <Body>
                            <Text style={{fontWeight:'bold'}}>Cry Freedom Concert</Text>
                            <Text note>Fight on violence again woman gets louder</Text>
                            <Text note>April 28, 2017  10:00 AM </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Kanpur</Text>
                            </Button>
                        </Right>
                    </ListItem>
<ListItem thumbnail>
                        <Left>
                            <Thumbnail square size={80} source={{ uri: 'http://america.cry.org/site/images/banner09.jpg'}} />
                        </Left>
                        <Body>
                            <Text style={{fontWeight:'bold'}}>Summer Volunteer Program</Text>
                            <Text note>Its time to build a difference . .</Text>
                            <Text note>April 29, 2017  12:00 PM </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Delhi</Text>
                            </Button>
                        </Right>
                    </ListItem>
<ListItem thumbnail>
                        <Left>
                            <Thumbnail square size={80} source={{ uri: 'http://www.upcomingeventsinindia.com/wp-content/uploads/2017/02/16903605_10158289791525501_8143739941444901608_o.jpg'}} />
                        </Left>
                        <Body>
                            <Text style={{fontWeight:'bold'}}>Run for Charity</Text>
                            <Text note>Empowering India</Text>
                            <Text note>May 30, 2017  12:00 PM </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Noida</Text>
                            </Button>
                        </Right>
                    </ListItem>
<ListItem thumbnail>
                        <Left>
                            <Thumbnail square size={80} source={{ uri: 'http://www.allaboutweybridge.co.uk/aaw/weybridge-events/i-india-2012-charity-concert-web.jpg'}} />
                        </Left>
                        <Body>
                            <Text style={{fontWeight:'bold'}}>Charity concert i-India</Text>
                            <Text note>Funds up, Hands down</Text>
                            <Text note>April 31, 2017  11:00 PM </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Delhi</Text>
                            </Button>
                        </Right>
                    </ListItem>
<ListItem thumbnail>
                        <Left>
                            <Thumbnail square size={80} source={{ uri: 'http://media.coindesk.com/uploads/2015/12/charity-giving-e1451420862790.jpg'}} />
                        </Left>
                        <Body>
                            <Text style={{fontWeight:'bold'}}>The India Giving Challenge</Text>
                            <Text note>Lets do something better</Text>
                            <Text note>April 31, 2017  11:00 PM </Text>
                        </Body>
                        <Right>
                            <Button transparent>
                                <Text>Delhi</Text>
                            </Button>
                        </Right>
                    </ListItem>
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