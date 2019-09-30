import { createStore } from 'redux'
import { combineReducers } from 'redux';
import Loged_in_user from './reducers/reducer_current_user_info';
import Updating_chat_list from './reducers/reducer_updateduserlist';

//Update in counter 9 -- this will combine all reducers in one
export const rootReducer = combineReducers({
    Loged_in_user,
    Updating_chat_list,
    
// more reducers go here
})

let store = createStore(rootReducer)

// store.subscribe(() =>
//   console.log(store.getState())
// );

export default store;
