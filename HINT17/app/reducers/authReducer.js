import { EMAIL_C, PASS_C, DESC_C, TYPE_C } from '../actions/types';

const IN_ST = { 
    email: '',
    password: '',
    type: '',
    description: ''
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
        default:
            return state;
    }
};
