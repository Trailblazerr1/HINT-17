import { EMAIL_C, PASS_C, DESC_C, TYPE_C, LOG_SUCCESS, F_DATA } from '../actions/types';

const IN_ST = { 
    email: 'anurag@anurag.com',
    password: 'asdfqwer',
    type: '',
    description: '',
    success: false,
    pData: ''
};

export default (state = IN_ST, action) => {
        console.log(action);
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
            return { ...state, success: true };
        case F_DATA:
            return { ...state, pData: action.payload };
        default:
            return state;
    }
};
