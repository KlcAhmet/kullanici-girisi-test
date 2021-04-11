import { createContext } from "react"

export const UserContex = {
    User: {},
    ContactList: {},
    Token: null,
    setUserContex: () => { }
}

export const UContex = createContext(UserContex)

function Contex() {

}


export default Contex