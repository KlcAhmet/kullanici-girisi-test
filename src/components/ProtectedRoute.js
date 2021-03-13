import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserLoggin, GuestLoggin } from "../component map/ComponentMap"


const ProtectedRoute = ({ component: Component, user, ...rest }) => {
    return (
        <p>test</p>
    )
}

export default ProtectedRoute;