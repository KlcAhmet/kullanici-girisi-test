import { createContext } from "react"

export const UserContex = {
    User: {},
    ContactList: {},
    Token: null
}

export const UContex = createContext(UserContex)

const Contex = () => {
    return UserContex
}


export default Contex