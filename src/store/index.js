import axios from "axios"
import Access from "../components/Access"
import { createStore, combineReducers } from 'redux'

//Store -> global useState


// actions
export const login = (e) => {
    let user = []
    const axiosParameters = {
        headers: { "Content-Type": "multipart/form-data" }
    }

    var formdata = new FormData()
    formdata.append('Email', e.target[0].value)
    formdata.append('Password', e.target[1].value)

    axios.post(`${Access}/Account/Login`, formdata, axiosParameters)
        .then(function (response) {
            user.push(response.data)
        })
        .catch(function (error) {
            console.log(error);
        })
    return {
        type: 'login',
        actions: e,
        user
    }
}

export const decrement = () => {
    return {
        type: 'decrement'
    }
}

// reducer
const setUserReducer = (state = [], actions = []) => {
    if (actions.type === "login"/*  && actions.user[0].IsSuccess */) {
        console.log(actions.user.values());
        return {
            ...state,
            User: actions.user
        }
    }
    else return state
}



//Displat it in the console
/* store.subscribe(() => { store.getState() }) */


export const allReducers = combineReducers({
    User: setUserReducer/* , */
    /* isLogged: loggedReducer */
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store