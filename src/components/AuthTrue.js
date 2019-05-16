import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function AuthTrue({ component: Component, authed, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authed === false
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />}
        />
    )
}