import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from './routes'

const RouterComponent = () => (
    <Switch>
        {routes.map((route) => (
            <Route {...route} key={route.path} />
        ))}
    </Switch>
)
export default RouterComponent
