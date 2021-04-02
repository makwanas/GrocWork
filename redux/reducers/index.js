import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import groceryListReducer from './groceryListReducer'

const rootReducer = combineReducers({
    user: userReducer,
    groceryList: groceryListReducer
})

export default rootReducer

