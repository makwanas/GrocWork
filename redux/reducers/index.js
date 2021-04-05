import { combineReducers } from 'redux';
import userReducer from './userReducer';
import groceryListReducer from './groceryListReducer'
import itemReducer from "./itemReducer";

const rootReducer = combineReducers({
    user: userReducer,
    groceryList: groceryListReducer,
    item: itemReducer
})

export default rootReducer

