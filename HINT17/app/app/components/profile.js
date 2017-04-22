import React, { Component } from 'react';
import {
    ListView,
    Text,
    View,
    Image,
TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import axios from 'axios';
import { Card } from './card';
import { CardSection } from './cardSection';
import { fetchData } from '../actions';

 

class showProfile extends Component {

    componentWillMount() {
      this.props.fetchData(this.props.email);
      const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
      this.state = {
        dataSource: ds.cloneWithRows(this.props.pList.data)
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
            console.warn( this.props.pList.data);
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
    console.log( state.auth);
    return {
        pList: state.auth.pData,
        email: state.auth.email
    }; 
};

export default connect(mapStateToProps, { fetchData })(showProfile);
