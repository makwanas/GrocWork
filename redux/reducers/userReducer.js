import * as types from '../constants/index'

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return action.currentUser

        case types.ADD_NEW_GROCERY_LIST_ID:
            return action.updateData

        case types.UPDATE_USER:
            return action.updateData

        default:
            return state
    }
    // return {
    //     ...state,
    //     currentUser: action.currentUser
    // }
}

export default userReducer