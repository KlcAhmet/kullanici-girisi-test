import { UserLoggin, GuestLoggin } from "../component map/ComponentMap"
/* import Auth from "./Auth" */
/* import store from "../store/index" */

const ProtectedRoute = (props) => {
    if (localStorage.getItem('Token')) {
        return (
            <UserLoggin />
        )
    }
    else {
        return (
            <GuestLoggin />
        )
    }

}

export default ProtectedRoute;