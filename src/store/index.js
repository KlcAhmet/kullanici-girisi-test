import axios from "axios"
import Access from "../components/Access"
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

//Store -> global useState


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

export const decrement = () => {
    return {
        type: 'decrement'
    }
}

// reducer
const setUserReducer = (state = [], actions) => {
    if (actions.type === "login" && actions.result.data.IsSuccess === true) {
        console.log(actions.result.data.Result);
        return {
            ...state,
            User: actions.result.data.Result

        }
    }
    else {
        return state
    }
}



//Displat it in the console
/* store.subscribe(() => { store.getState() }) */


export const allReducers = combineReducers({
    User: setUserReducer/* , */
    /* isLogged: loggedReducer */
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store