import axios from "axios"
import { Message } from '../component map/ComponentMap'
import { Events } from '../utils/Eventbus/EventBusEvents'

axios.interceptors.response.use(function (response) {
    if (response.status === 200 && response.data.IsSuccess === false) Events("login", "unsuccessful", `${response.data.ResultType}, ${response.data.Result}`)
    else if (response.status === 200 && response.data.IsSuccess === true) Events("login", "loginSuccess", response.data.Result.UserInfo.FirstName)
    else if (response.status === 200 && response.data.IsSuccess === 1 && response.data.ResultType === "SUCCESS") Message("registersuccess", `${response.data.Result}`)


    return response;
}, function (err) {
    try {
        if (err.response.status === 400) Message(0, "Bad Request", `${err.response.status}`,)
        else if (err.response.status === 401) Message("UNAUTHORIZED", `${err.response.data.ResultType}`, `${err.response.data.Result}`)
        else if (err.response.status === 500) Message(0, "Server Error", `${err.response.status}`)

        return Promise.reject(err);
    } catch (error) {
        if (!err.status) {
            Message(0, "Network Error", "Büyük ihtimal şirkette internet gitti.")
        }
        return Promise.reject(err)
    }
});