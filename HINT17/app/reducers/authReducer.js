import { EMAIL_C, PASS_C, DESC_C, TYPE_C, LOG_SUCCESS, F_DATA, CONT_C, REC_C, DATE_C } from '../actions/types';

const IN_ST = { 
    email: '',
    password: '',
    type: '',
    description: '',
    success: false,
    pData: '',
    initData: '',
    contact: '',
    receiver: '',
    date: ''
};

export default (state = IN_ST, action) => {
    console.log(action.payload);
    switch (action.type) {
        case EMAIL_C:
            return { ...state, email: action.payload };   
        case PASS_C:
            return { ...state, password: action.payload };
        case TYPE_C:
            return { ...state, type: action.payload };
        case DESC_C:
            return { ...state, description: action.payload };
        case LOG_SUCCESS:
            return { ...state, success: true, initData: action.payload };
        case F_DATA:
            return { ...state, pData: action.payload };
        case CONT_C:
            return { ...state, contact: action.payload };
        case REC_C:
            return { ...state, receiver: action.payload };
        case DATE_C:
            return { ...state, date: action.payload };
        default:
            return state;
    }
};
