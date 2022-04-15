import { combineReducers, createStore } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import  { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    firesore: firestoreReducer
})

const initialState = {}

const store = createStore(rootReducer, initialState)

export default store;