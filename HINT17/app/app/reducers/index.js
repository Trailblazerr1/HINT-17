import { combineReducers } from 'redux';
import AuthReducer from './authReducer';
import dataRed from './dataRed';

export default combineReducers({
    auth: AuthReducer,
    dat: dataRed
});

