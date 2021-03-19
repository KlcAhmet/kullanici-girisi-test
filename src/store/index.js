import axios from "axios"
import Access from "../components/Access"
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
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
                authorization: `Bearer ${store.getState().User.Result.AccessToken}`
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
    if (actions.type === "login" && actions.result.data.IsSuccess === true) {
        return actions.result.data
    }
    else if (actions.type === "login" && actions.result.data.IsSuccess === false) {
        return actions.result.data
    }
    else {
        return state
    }
}

const getContactListReducer = (state = [false], actions) => {
    /* "Result": "Oturum süresi doldu tekrardan giriş yapınız."*/
    if (actions.type === "getContactList" && actions.result.data.IsSuccess === 1) {
        return actions.result.data.Result
    }
    else if (actions.type === "getContactList") {
        return actions.Result
    }
    else {
        return state
    }
}



//Display it in the console
/* store.subscribe(() => { store.getState() }) */
const persistedState = loadState();

export const allReducers = combineReducers({
    User: setUserReducer,
    ContactList: getContactListReducer
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, { ...persistedState }, composeWithDevTools(applyMiddleware(thunk)))

export default store