import { createStore, combineReducers } from 'redux'

//Store -> global useState


// actions
export const increment = () => {
    return {
        type: 'increment'
    }
}

export const decrement = () => {
    return {
        type: 'decrement'
    }
}

// reducer
const counterReducer = (state = 0, actions) => {
    switch (actions.type) {
        case "increment":
            return state + 1
        case "decrement":
            return state - 1
        default:
            return state
    }
}

const loggedReducer = (state = false, actions) => {
    switch (actions.type) {
        case 'SIGN_IN':
            return !state
        default:
            return state
    }
}


//Displat it in the console
/* store.subscribe(() => { store.getState() }) */

// dispatch
/* store.dispatch(increment())
store.dispatch(decrement()) */

export const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
})

/* redux extension için */
/* window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() */
let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store