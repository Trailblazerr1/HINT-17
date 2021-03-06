import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginForm';
import DonateFormOne from './components/dFirstPage';
import moneyForm from './components/moneyForm';
import kindForm from './components/kindForm';
import showProfile from './components/profile';
import ngoProfile from './components/ngoProfile';
import acceptForm from './components/acceptForm';
import ngoProfile2 from './components/ngoProfile2';
import SignUpForm from './components/signUp';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 55 }}>
            <Scene key="login" component={LoginForm} title="Login" />
            <Scene key="donateNow" component={DonateFormOne} title="Donate" rightTitle="Logout" onRight={() => Actions.login()} />
            <Scene key="moneyForm" component={moneyForm} title="Details"  rightTitle="Logout" onRight={() => Actions.login()}/>
            <Scene key="kindForm" component={kindForm} title="Details"  rightTitle="Logout" onRight={() => Actions.login()}/>
            <Scene key="profile" component={showProfile} title="Your Profile"  rightTitle="Logout" onRight={() => Actions.login()} initial />
            <Scene key="nprofile" component={ngoProfile} title="Your Profile" rightTitle="Logout" onRight={() => Actions.login()} />
            <Scene key="acceptForm" component={acceptForm} title="Donation details"  rightTitle="Logout" onRight={() => Actions.login()} />
            <Scene key="nprofile2" component={ngoProfile2} title="Your Profile"  rightTitle="Logout" onRight={() => Actions.login()} />
            <Scene key="signUp" component={SignUpForm} title="Sign Up" />
        </Router>
        );
};

export default RouterComponent;
