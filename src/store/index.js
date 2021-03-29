import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from '../localStorage'
import Post from '../services/Post'


// actions
export function login(event) {
    return async (dispatch) => {
        const result = await Post.postLoginData(event)
        return await dispatch({
            type: 'login',
            result
        })
    }
}
export function getContactList(event) {
    return async (dispatch) => {
        const result = await Post.postContactList(event)
        return await dispatch({
            type: 'getContactList',
            result
        })
    }
}

// reducer
const setUserReducer = (state = [], actions) => {
    if (actions.type === "login" && actions.result.data.IsSuccess === true) {
        return actions.result.data
    }
    else {
        return state
    }
}

const getContactListReducer = (state = [], actions) => {
    if (actions.type === "getContactList" && actions.result.status === 200) {
        return actions.result.data.Result
    }
    else if (actions.type === "getContactList") {
        return actions.Result
    }
    else {
        return state
    }
}


const setTokenReducer = (state = [], actions) => {
    if (actions.type === "login" && actions.result.data.IsSuccess === true) {
        return actions.result.data.Result.AccessToken
    }
    else {
        return state
    }
}
const testReducer = (state = [], actions) => {
    if (actions.type === "test" && actions.result.status === 200) {
        return actions
    }
    else if (actions.type === "test") {
        return actions
    }
    else {
        return state
    }
}

const initialState = {
    User: {},
    Token: null,
    ContactList: null,
    Test: 'asdsad'
}

const persistedState = loadState(initialState);

export const allReducers = combineReducers({
    User: setUserReducer,
    ContactList: getContactListReducer,
    Token: setTokenReducer,
    Test: testReducer
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, { ...persistedState }, composeWithDevTools(applyMiddleware(thunk)))

export default store