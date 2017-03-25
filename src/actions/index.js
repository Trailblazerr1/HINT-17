import { Actions } from 'react-native-router-flux';
import {
 EMAIL_C,
  PASS_C,
  DESC_C,
  TYPE_C
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
// export const loginUser = (status) => {
//     return(dispatch) => {
//         if (status == true) {
//             console.warn('Action');
//         }
//     }
// };
