import axios from "axios"
import './axiosInterceptors'
import { Message } from '../component map/ComponentMap'
import Access from "../components/Access"
import store from "../store/index"

// eslint-disable-next-line
export default {
    postLoginData(event) {
        const axiosParameters = {
            headers: { "Content-Type": "multipart/form-data" }
        }

        var formdata = new FormData()
        formdata.append('Email', event.target[0].value)
        formdata.append('Password', event.target[1].value)
        Message("loading")
        return axios.post(`${Access}/Account/Login`, formdata, axiosParameters)
    },
    postContactList(event) {
        const axiosParameters = {
            headers: {
                "Content-Type": "multipart/form-data",
                authorization: `Bearer ${store.getState().Token}`
            }
        }

        var formdata = new FormData()
        formdata.append('FullName', event.target[0].value)
        formdata.append('Email', event.target[1].value)
        formdata.append('Subject', event.target[2].value)
        formdata.append('Message', event.target[3].value)

        return axios.post(`${Access}/ContactUs/List`, formdata, axiosParameters)
    },
    postAccountCreate(event) {
        const axiosParameters = {
            headers: { "Content-Type": "multipart/form-data" }
        }

        var formdata = new FormData()
        formdata.append('Email', event.target[0].value)
        formdata.append('Password', event.target[1].value)
        formdata.append('FirstName', event.target[2].value)
        formdata.append('LastName', event.target[3].value)
        formdata.append('PhoneNumber', event.target[4].value)
        formdata.append('BirthDate', event.target[5].value)
        formdata.append('Gender', event.target[6].value)
        formdata.append('Address', event.target[7].value)

        return axios.post(`${Access}/Account/Create`, formdata, axiosParameters)
    },
    forgotPassword(event) {
        const axiosParameters = {
            headers: { "Content-Type": "multipart/form-data" }
        }

        var formdata = new FormData()
        formdata.append('Email', event.target[0].value)

        return axios.post(`${Access}/Account/ForgotPassword`, formdata, axiosParameters)
    }

}