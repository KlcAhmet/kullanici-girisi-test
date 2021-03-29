import { UserLoggin, GuestLoggin } from "../component map/ComponentMap"
import { useSelector } from "react-redux"

const ProtectedRoute = (props) => {
    const Token = useSelector(state => state.Token)
    try {
        if (Token !== null) {
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