import {
 EMAIL_C,
  PASS_C
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
