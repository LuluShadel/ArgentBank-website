import { LOGIN_USER, LOGIN_USER_FAILDED, LOGIN_USER_SUCCES} from "../action/user.action";

const initialState = { 
    users : "",
    isLoggedIn : false,
}; 

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER :
            return {...state};

        case LOGIN_USER_SUCCES :
            return {
                ...state,
                isLoggedIn: true,
            };
        case LOGIN_USER_FAILDED :
            return {
                ...state,
                isLoggedIn: false,
            }
        
            default :
            return state 
        }

        }
    
    
