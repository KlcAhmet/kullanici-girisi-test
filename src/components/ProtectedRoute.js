import { UserLoggin, GuestLoggin } from "../component map/ComponentMap"
import Auth from "./Auth"

const ProtectedRoute = (props) => {
    if (Auth.getToken() != null) {
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