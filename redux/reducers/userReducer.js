import * as types from '../constants/index'

const initialState = {
    currentUser: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return {
                ...state,
                currentUser: action.currentUser
            }

        case types.ADD_NEW_GROCERYLIST_ID:
            return{
                ...state,
                currentUser: action.updateData
            }

        default:
            return state
    }
    // return {
    //     ...state,
    //     currentUser: action.currentUser
    // }
}