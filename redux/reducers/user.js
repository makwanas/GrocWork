const initialState = {
    currentUser: null
}

export const userReducer = (state = initialState, action) => {
    return {
        ...state,
        currentUser: action.currentUser
    }
}