import axios from "axios"
import { saveState } from '../localStorage'
import { Message } from '../component map/ComponentMap'

axios.interceptors.response.use(function (response) {
    /* console.log(response); */

    if (response.data.IsSuccess === false) {
        localStorage.removeItem('Token')
        localStorage.removeItem('User')
        localStorage.removeItem('ContactList')
        const sum = {
            status: response.status,
            data: {
                IsSuccess: false,
                Result: response.data.Result
            }
        }
        console.log(response.data);
        Message("unsuccessful", `${response.data.ResultType}, ${response.data.Result}`)
        return sum
    }
    else {
        if (response.data.IsSuccess === true) {
            setTimeout(function () {
                Message("loginSuccess", `${response.data.Result.UserInfo.FirstName}`)
            }, 500);
            saveState({
                Token: response.data.Result.AccessToken
            })
        }
        return response;
    }

}, function (err) {
    try {
        if (err.response.status === 400) Message(0, "Bad Request", `${err.response.status}`,)
        else if (err.response.status === 401) {
            Message("UNAUTHORIZED", `${err.response.data.ResultType}`, `${err.response.data.Result}`)
            localStorage.removeItem('User')
            localStorage.removeItem('Token')
            localStorage.removeItem('ContactList')
            setTimeout(function () {
                window.location.href = "/#/login"
                /* History("/login") */
            }, 2000);
        }
        else if (err.response.status === 500) Message(0, "Server Error", `${err.response.status}`)

        return Promise.reject(err);

    } catch (error) {
        if (!err.status) {
            Message(0, "Network Error", "Büyük ihtimal şirkette internet gitti.")
        }
        return Promise.reject(err)
    }


});



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