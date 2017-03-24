import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import DonateFormOne from './components/dFirstPage';
import moneyForm from './components/moneyForm';
import kindForm from './components/kindForm';


const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="login" component={LoginForm} title="tmkc" initial />
            <Scene key="donateNow" component={DonateFormOne} title="Donate"  />
            <Scene key="moneyForm" component={moneyForm} title="Details" />
            <Scene key="kindForm" component={kindForm} title="Details" />
        </Router>
        );
};

export default RouterComponent;
