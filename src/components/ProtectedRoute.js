import { UserLoggin, GuestLoggin } from "../component map/ComponentMap"
/* import Auth from "./Auth" */
import store from "../store/index"

const ProtectedRoute = (props) => {
    try {
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
    } catch (error) {

    }

}

export default ProtectedRoute;