import { combineReducers, createStore } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    firebase: firebaseReducer
})

const initialState = {}

const store = createStore(rootReducer, initialState)

export default store;