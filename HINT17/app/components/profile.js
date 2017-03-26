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
    var arrr= [];
class showProfile extends Component {

  getMoviesFromApiAsync() {
    //  fetch('http://35.166.45.231:8080/notifications?user_email=anurag@anurag.com')
    //   .then((response) => {
    //     return response.json();
    //   })
    // .then((dataa) => this.setState({

    //       weather: dataa.data
    //     }))

    //   .catch((error) => {
    //     console.error(error);
    //   });

  }
    componentWillMount() {
    // this.state = {
    //   weather: 'c'
    // }//object
    //     axios.get('http://35.166.45.231:8080/notifications?user_email=anurag@anurag.com')
    //         .then((responsed) => responsed)
    //       .then(response => this.state = {
    //           ...this.state,
    //           weather: 'chutiya'
    //         }).done();
    //     // console.warn(daa.then((response) => arrr.push(response)));
    //     console.log(this.state.weather)
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
    <View style={styles.vcontainer}>
      <View style={styles.container}>
        <Text style={styles.textStyle1}>
          <Image style={styles.image} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'}} />
          <Text style={styles.textStyle2}>        Anurag Kushwaha</Text> 
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
    return {
        pList: state.dat
    }; 
};

export default connect(mapStateToProps)(showProfile);
