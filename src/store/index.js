import axios from "axios"
import Access from "../components/Access"
import { createStore, combineReducers } from 'redux'

//Store -> global useState


// actions
export const login = (e) => {
    return {
        type: 'login',
        userObject: e
    }
}

export const decrement = () => {
    return {
        type: 'decrement'
    }
}


/* "Result": {
    "AccessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJQcm9qZWN0SUQiOiI0ZGIxNTViMC1mNzIwLTQwM2QtYjNiZC04MDg2YmNhNmMzM2MiLCJVc2VySW5mbyI6IntcIlVzZXJJRFwiOlwiYjIxMTVlYTAtMWIzNi00ZWFhLWE2MzUtNjk1ZmJkZTExMGI5XCIsXCJFbWFpbFwiOlwic2VtaWhjZXRpbjM0QGdtYWlsLmNvbVwiLFwiRmlyc3ROYW1lXCI6XCJzZW1paFwiLFwiTGFzdE5hbWVcIjpcIsOnZXRpblwiLFwiUGhvbmVOdW1iZXJcIjpcIjU1NTU1XCIsXCJCaXJ0aERhdGVcIjpcIjEyLjAxLjIwMjFcIixcIkdlbmRlclwiOlwiZXJrZWtcIixcIkFkZHJlc3NcIjpcImhhbWl0YWJhdCBtaC4gZGVtZXQgc2suIG5vOjM3XCIsXCJJc0NvbmZpcm1cIjp0cnVlfSIsIm5iZiI6MTYxNjAwNDAwMCwiZXhwIjoxNjQ3NTQwMDAwLCJpc3MiOiJAZmludGVjaHlhemlsaW0iLCJhdWQiOiJAZmludGVjaHlhemlsaW0ifQ.4JMy2JnhAaSnEM_lp2OZgZOl9vKb9MbQFjfhQyVLpH8",
    "UserInfo": {
      "UserID": "b2115ea0-1b36-4eaa-a635-695fbde110b9",
      "Email": "semihcetin34@gmail.com",
      "FirstName": "semih",
      "LastName": "çetin",
      "PhoneNumber": "55555",
      "BirthDate": "12.01.2021",
      "Gender": "erkek",
      "Address": "hamitabat mh. demet sk. no:37",
      "IsConfirm": true
    }
  } */

// reducer
const setUserReducer = (state = ["undefined"], actions) => {
    if (actions.type === "login") {

        const axiosParameters = (e) => {

        }
        /* console.log(actions); */
        var formdata = new FormData()
        formdata.append('Email', actions.userObject.target[0].value)
        formdata.append('Password', actions.userObject.target[1].value)
        axios({
            method: "post",
            url: `${Access}/Account/Login`,
            data: formdata,
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(function (data) {
                //handle success
                if (data.data.IsSuccess) {
                    return "state = data.data.Result"
                    /*  props.history.push("/contact") */
                }
                else {
                    alert("Mail yada şifre yanlış!")
                }

            })
            .catch(function (error) {
                console.log("Hata")
                console.log(error)
            })
        return state = 
    }
    else {
        return state = "setUserReducer başrısız"
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
let store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store