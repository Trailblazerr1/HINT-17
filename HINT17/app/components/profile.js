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

    // calDist({lat, lon}) {
    //   distance = axios.get('http://maps.google.co.in/distance?lat='+this.props.lan+'&lon='this.props.lon)
    //   .then(res =>
    //     distance= res.dist);
    // }

    componentDidMount() {
        this.props.fetchData(this.props.email);
        this.ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
    }


    // combatConcurrency() {
    //   if(this.props.clash==true) {
    //     if(this.props.dist1 < this.props.dist2) {
    //       this.props.location = this.props.dist1;
    //     }
    //   else {
    //             this.props.location = this.props.dist2;
    //     }
    //   }
    // }

    renderRow(data) {
      console.log(data.status);
      if(data.status=="Pending") {
        return ( 
          <ListItem >
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
          <ListItem  >
              <Body>
                  <Text style={{fontWeight:'bold'}}>{data.to}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text note>{data.collection_time.split(' ')[0]}</Text>
                    <Text note>{data.collection_time.split(' ')[1].split('+')[0]}</Text>
                  </View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text note>Contact:{data.donation_mobile}</Text>
                    <Text note>Receiver:{data.donation_reciever}</Text>
                  </View>
              </Body>
              <Thumbnail small source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Icons8_flat_ok.svg/2000px-Icons8_flat_ok.svg.png'}} />
          </ListItem>
        );
      }
    }


    render() {
      this.props.iData.previous_donation.map(function(single) {
                    if(single.status=="Pending") {
                      pend = pend + 1;
                    }
                    else {
                      comp = comp + 1;
                    }
                });
        if (this.props.pList) {
            return ( 
              <Container>
                <Content>
                  <View>
                  <Image source={{ uri: 'https://i.ytimg.com/vi/pbmoEk1PASE/maxresdefault.jpg' }} style={styles.imgBack}>
                    <Thumbnail source={{ uri: 'http://img11.deviantart.net/e4a2/i/2016/096/f/7/avatar_icon_by_astrolink247-d9xxs6r.jpg' }} bordered large style={{ marginLeft: 120, marginTop: 50}} />
                    <Text style={{color:'black', fontSize: 24,fontWeight:'bold', marginLeft: 120, marginTop: 10,
                     fontFamily:'Roboto' }}>{this.props.iData.username}</Text>
                    <Text style={{color:'grey', marginLeft: 95, marginTop: 5,
                     fontFamily:'Roboto' }}>{this.props.iData.user_email}</Text>
                       <View style={{ flexDirection: 'row'}}>
                        <View>
                          <Thumbnail source={{ uri: 'https://www.shareicon.net/data/2015/09/24/106380_add_512x512.png' }} bordered style={{ marginLeft: 20, marginTop: 15}} />
                          <Text style={{color:'black', marginLeft: 40, fontWeight:'bold'}}>{comp/2}</Text>
                        </View>
                        <View>
                          <Thumbnail source={{ uri: 'https://d30y9cdsu7xlg0.cloudfront.net/png/99626-200.png' }} bordered style={{ marginLeft: 180, marginTop: 15}} />
                          <Text style={{color:'black', marginLeft: 200, fontWeight:'bold'}}>{pend/2}</Text>
                        </View>
                      </View>
                    </Image>
                  </View>

                  <View>
                    <List>
                    <ListView dataSource={this.ds.cloneWithRows(this.props.pList)}
                            renderRow={this.renderRow.bind(this)}
                      />
                      </List>
                  </View>         
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