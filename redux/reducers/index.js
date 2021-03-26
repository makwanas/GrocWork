import { combineReducers } from 'redux';
import { userReducer } from './user';
//import {groceryListsReducer} from './groceryLists'

const rootReducer = combineReducers({
    user: userReducer,
    //groceryLists: groceryListsReducer
})

export default rootReducer

