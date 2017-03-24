import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View, Text } from 'react-native';
import { createStore } from 'redux';
import reducers from './reducers';
import LoginForm from './components/loginForm';

class App extends Component {
    //componentWillMount() {

        //}

    render() {
    return (
      <Provider store={createStore(reducers)}>
          <View>
            <LoginForm />
          </View>
      </Provider>
    );
  }
}

export default App;
