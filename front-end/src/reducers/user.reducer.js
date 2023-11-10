import { LOGIN_USER, LOGIN_USER_FAILDED, LOGIN_USER_SUCCES, LOGOUT_USER, USER_PROFILE, UPDATE_PROFILE} from "../action/user.action";


const initialState = { 
    isLoggedIn : false,
    errorMessage : null,
    userProfile : "",
}; 




export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER :
            return {...state};

        case LOGIN_USER_SUCCES :
            return {
                ...state,
                isLoggedIn: true,
                errorMessage : null,
            };
        case LOGIN_USER_FAILDED :
            return {
                ...state,
                isLoggedIn: false,
                errorMessage : action.payload,
            }

        case LOGOUT_USER : 
        return {
            ...state,
                isLoggedIn: false,
        }
        case USER_PROFILE :
            return {
                ...state,
                userProfile: action.payload,
            }
        case UPDATE_PROFILE : 
        return {
            ...state,
            userProfile: action.payload,
        }
        
            default :
            return state 
        }

        }
    
    
