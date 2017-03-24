import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import DonateFormOne from './components/dFirstPage';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="login" component={LoginForm} title="tmkc" />
            <Scene key="donateNow" component={DonateFormOne} title="Donate" />

        </Router>
        );
};

export default RouterComponent;
