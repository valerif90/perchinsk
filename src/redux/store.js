import {combineReducers, createStore} from 'redux';
import profileReducer from './profile_reducer';
import usersReducer from './users_reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;

export default store;