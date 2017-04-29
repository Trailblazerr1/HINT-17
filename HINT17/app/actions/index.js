import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
 EMAIL_C,
  PASS_C,
  DESC_C,
  TYPE_C,
  LOG_SUCCESS,
  F_DATA,
  CONT_C,
  REC_C,
  DATE_C
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

export const contChanged = (text) => {
    return {
        type: CONT_C,
        payload: text
    };
};

export const dateChanged = (text) => {
    return {
        type: DATE_C,
        payload: text
    };
};

export const recChanged = (text) => {
    return {
        type: REC_C,
        payload: text
    };
};


export const loginUser = ({ email, password }) => {
    //action creator is ret a funct
    return (dispatch) => {
        axios.get(' http://35.166.45.231:8001/login?user_email=' + email + '&password=' + password)
        .then(resp => {
            dispatch({ type: LOG_SUCCESS, payload: resp.data });
        })
        .catch(() => console.log('Oops!'));
    };
};

export const fetchData = (email) => {
    return (dispatch) => {
        axios.get('http://35.166.45.231:8001/notifications?user_email='+email)
        .then(response => {
            dispatch({ type: F_DATA, payload: response.data });
        })
        .catch(() => console.log('Cant fetch data'));
    };
}