import * as types from '../constants/index'

const initialState = []

const itemReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.CREATE_ITEM:
            return [
                action.item,
                ...state
            ]

        case types.LOAD_ITEMS:
            return action.items

        default:
            return state
    }
}

export default itemReducer