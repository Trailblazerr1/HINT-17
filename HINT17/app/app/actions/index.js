import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
 EMAIL_C,
  PASS_C,
  DESC_C,
  TYPE_C,
  LOG_SUCCESS,
  F_DATA
} from './types';

export const emailChanged = (text) => {
    return {
        type: EMAIL_C,
        payload: text
    };
};

export const passChanged = (text) => {
    return {
        type: PASS_C,
        payload: text
    };
};

export const typeChanged = (text) => {
    return {
        type: TYPE_C,
        payload: text
    };
};

export const descChanged = (text) => {
    return {
        type: DESC_C,
        payload: text
    };
};

export const loginUser = ({ email, password }) => {
    //action creator is ret a funct
    return (dispatch) => {
        axios.get(' http://35.166.45.231:8080/login?user_email=' + email + '&password=' + password)
        .then(resp => {
            dispatch({ type: LOG_SUCCESS, payload: resp });
        })
        .catch(() => console.log('Oops!'));
    };
};

export const fetchData = (email) => {
    return (dispatch) => {
        axios.get('http://35.166.45.231:8080/notifications?user_email='+email)
        .then(response => {
            dispatch({ type: F_DATA, payload: response });
        })
        .catch(() => console.log('Cant fetch data'));
    };
}