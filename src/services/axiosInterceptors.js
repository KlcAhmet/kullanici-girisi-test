import axios from "axios"
import { Events } from '../utils/Eventbus/EventBusEvents'

axios.interceptors.response.use(function (response) {
    if (response.status === 200 && response.data.IsSuccess === false) Events("login", "unsuccessful", response.data.ResultType, response.data.Result)
    else if (response.status === 200 && response.data.IsSuccess === true) Events("login", "loginSuccess", response.data.Result.UserInfo.FirstName)
    else if (response.status === 200 && response.data.IsSuccess === 1 && response.data.ResultType === "SUCCESS") Events("register", "registersuccess", `${response.data.Result}`)

    return response;
}, function (err) {
    try {
        if (err.response.status === 400) Events("error", "400", err.response.status)
        else if (err.response.status === 401) Events("UNAUTHORIZED", "UNAUTHORIZED", err.response.data.ResultType, err.response.data.Result)
        else if (err.response.status === 500) Events("error", "500", err.response.status)

        return Promise.reject(err);
    } catch (error) {
        if (!err.status) {
            Events("error", "Network Error", "Büyük ihtimal şirkette internet gitti.")
        }
        return Promise.reject(err)
    }
});