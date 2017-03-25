import React, { Component } from 'react';
import {
    ListView,
    Text,
    View,
    Image,
TouchableOpacity
} from 'react-native';
var RNFS = require('react-native-fs');
import { Card } from './card';
import { CardSection } from './cardSection';
import { connect } from 'react-redux';
import axios from 'axios';

var value = '';
class showProfile extends Component {
    componentWillMount() {
var path ='testimony.txt';
        axios.get('http://35.166.45.231:8080/notifications?user_email=anurag@anurag.com')
        .then((response) => {
              });       // change to return response.text()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.pList),
    };

    }

    renderRow(data) {
        return (
        <Card>
            <CardSection><Text>{data.from}                                        {data.status}</Text></CardSection>
            <CardSection><Text>{data.date} </Text></CardSection>
        </Card>
            );
        }


    render() {
        return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textStyle1}>
          <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'}} />
          <Text style={styles.textStyle2}>
          Anurag Kushwaha
          </Text> 
        </Text>
      </View>

        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
         />
    </View>
            );
    }
}

const styles = {
  container: {
    backgroundColor: '#FFC107',
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
    marginHorizontal: 35,
    backgroundColor: 'transparent'
  }
};

const mapStateToProps = state => {
    return {
        pList: state.dat
    }; 
};

export default connect(mapStateToProps)(showProfile);
