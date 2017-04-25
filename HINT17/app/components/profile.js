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
    connect
} from 'react-redux';
import axios from 'axios';
import {
    Card
} from './card';
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
          <Card>
            <Text>{data.date} </Text> 
          </Card>
        );
    }


    render() {
      console.log(this.props.pList);
        if (this.props.pList) {
            return ( 
              <View 
                style={
                    styles.vcontainer
                }>

                <View 
                  style={
                    styles.container
                } >
                <Text 
                  style={
                    styles.textStyle1
                } >
                <Image 
                  style={
                    styles.image
                }
                source={
                    {
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'
                    }
                }
                /> <Text style = {
                    styles.textStyle2
                } > Anurag Kushwaha </Text>  </Text>
                 </View> 

                <ListView dataSource={this.ds.cloneWithRows(this.props.pList)}
                renderRow={this.renderRow.bind(this)}
                />
              </View>
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
    //console.log( state.auth);
    return {
        pList: state.auth.pData,
        email: state.auth.email
    };
};

export default connect(mapStateToProps, {
    fetchData
})(showProfile);