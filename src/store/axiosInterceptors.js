import axios from "axios"
import { saveState } from '../localStorage'
import store from "../store/index"

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log("request");
    console.log(config);
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response");
    console.log(response);
    if (response.data.IsSuccess === false) {
        saveState({
            User: store.getState().User
        })

        localStorage.removeItem('Token')

        alert(response.data.Result)
        const sum = {
            status: response.status,
            data: {
                IsSuccess: false,
                Result: response.data.Result
            }
        }
        return sum
    }
    else {
        saveState({
            Token: store.getState().Token
        })
        return response;
    }

}, function (err) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (err.response.status === 400) alert("Bad Request")
    if (err.response.status === 401) {
        localStorage.removeItem('Token')
        localStorage.removeItem('ContactList')
    }
    if (err.response.status === 500) alert("Server Error")

    return Promise.reject(err);
});