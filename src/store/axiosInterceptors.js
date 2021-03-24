import axios from "axios"
import { saveState } from '../localStorage'
import store from "../store/index"

/*
axios.interceptors.request.use(function (config) {

    console.log("request");
    console.log(config);
    return config;
}, function (error) {

    return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {

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

    if (err.response.status === 400) alert("Bad Request")
    if (err.response.status === 401) {
        localStorage.removeItem('Token')
        localStorage.removeItem('ContactList')
    }
    if (err.response.status === 500) alert("Server Error")

    return Promise.reject(err);
}); */



/* axios.interceptors.response.use(function (response) {
    //WARNİNG İNFO VE ERROR PAGELERİ EKLENECEK
    store.commit('loading', false)
    if (response.ResultType === 'UNAUTHORIZED') {
        window.location.href = '/#/pages/not-authorized'
    } else if (response.status === 200 && response.data.IsSuccess === true && response.data.ResultType !== 'LIST' && response.data.ResultType !== 'OBJECT' && response.data.ResultType !== 'RESULT') {
        MessageBox.OperationSuccessMessage(response.data.Result)
    } else if (response.data.ResultType === "SUCCESS") {
        MessageBox.OperationSuccessMessage(response.data.Result)
    } else if (response.data.ResultType === "ERROR") {
        MessageBox.OperationErrorMessage(response.data.Result)
    } else if (response.data.ResultType === "WARNING") {
        MessageBox.OperationWarningMessage(response.data.Result)
    } else if (response.status === 200 && response.data.IsSuccess === false) {
        MessageBox.OperationWarningMessage(response.data.Result);
    } else if (response.status === 200 && response.data.ResultType === 'LIST') {
        if (response.data.Result === '' || response.data.Result === null) response.data.Result = []
    }
    return response.data
}, function (error) {
    store.commit('loading', false)
    if (error.response.data.ResultType === 'UNAUTHORIZED') {
        store.commit("auth/setLogout", null)
    } else if (error.response.status === 401) {
        store.commit("auth/setLogout", null)
    } else if (error.response.status === 400) {
        if (error.response.data.ResultType === 'LIST' || error.response.data.ResultType === 'OBJECT' || error.response.data.ResultType === 'RESULT') return error.response.data
        MessageBox.OperationErrorMessage(error.response.data.Result)
    }
    return error.response.data //Promise.reject(error)
}) */