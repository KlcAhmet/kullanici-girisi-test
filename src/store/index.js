import axios from "axios"
import Access from "../components/Access"
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
/* localStorage */
import { loadState } from '../localStorage'


// actions
export function login(e) {
    return async (dispatch) => {
        const axiosParameters = {
            headers: { "Content-Type": "multipart/form-data" }
        }

        var formdata = new FormData()
        formdata.append('Email', e.target[0].value)
        formdata.append('Password', e.target[1].value)

        const result = await axios.post(`${Access}/Account/Login`, formdata, axiosParameters)
        return await dispatch({
            type: 'login',
            result
        })
    }
}
export function getContactList(e) {
    return async (dispatch) => {
        const axiosParameters = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${Object.values(JSON.parse(localStorage.getItem('Token')))}`
            }
        }

        var formdata = new FormData()
        formdata.append('FullName', e.target[0].value)
        formdata.append('Email', e.target[1].value)
        formdata.append('Subject', e.target[2].value)
        formdata.append('Message', e.target[3].value)

        const result = await axios.post(`${Access}/ContactUs/List`, formdata, axiosParameters)
        return await dispatch({
            type: 'getContactList',
            result
        })
    }
}

// reducer
const setUserReducer = (state = [], actions) => {

    if (actions.type === "login" && actions.result.status === 200) {
        return actions.result.data
    }
    else if (actions.type === "login" && actions.result.status === 400) {
        //Bad Request
        return state
    }
    else if (actions.type === "login" && actions.result.status === 500) {
        //Internal Server Error
        return state
    }
    else {
        return state
    }
}

const getContactListReducer = (state = [], actions) => {
    /* "Result": "Oturum süresi doldu tekrardan giriş yapınız."*/
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
    /* "Result": "Oturum süresi doldu tekrardan giriş yapınız."*/
    if (actions.type === "login" && actions.result.status === 200) {
        return actions.result.data.Result.AccessToken
    }
    else if (actions.type === "login") {
        return actions.Result
    }
    else {
        return state
    }
}
const testReducer = (state = [], actions) => {
    /* "Result": "Oturum süresi doldu tekrardan giriş yapınız."*/
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
    ContactList: {},
    Test: 'asdsad'
}


//Display it in the console
/* store.subscribe(() => { store.getState() }) */
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