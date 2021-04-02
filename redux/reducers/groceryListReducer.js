import * as types from '../constants/index'

const initialState = []

const groceryListReducer = (state = initialState, action) => {
    switch (action.type) {
        // Create a grocery list without changing any state.
        case types.CREATE_GROCERY_LIST:
            return [
                {
                    groceryListId: action.groceryList.groceryListId,
                    members: action.groceryList.members,
                    name: action.groceryList.name,
                    dateCreated: action.groceryList.dateCreated,
                    privacy: action.groceryList.privacy,
                    items: action.groceryList.items
                },
                ...state
            ]

        case types.LOAD_GROCERY_LISTS:
            return action.groceryList

        case types.DELETE_GROCERY_LIST:
            return action.updateData

        default:
            return state
    }
}

export default groceryListReducer