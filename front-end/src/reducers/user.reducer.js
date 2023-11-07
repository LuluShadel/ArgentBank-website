const initialState = { users : []}; 

export default function userReducer (state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS_NAME' :
            return {...state, users:action.users};
            default :
            return state
    }
}