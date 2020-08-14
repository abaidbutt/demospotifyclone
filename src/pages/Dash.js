import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Signin } from './components/dash/Signin'
import { Navigate } from './components/dash/Navigate'
import { Footer } from './components/dash/Footer'
import { Header } from './components/dash/Header'
import { useRouteMatch } from 'react-router-dom'
import { Premium } from './components/dash/Premium'
import { Signup } from './components/dash/Signup'
import { Check } from './components/dash/Check'
export const Dash = ({setIsAuthenticated}) => {
    const { path } = useRouteMatch()
    return (
        <div>
            <Navigate setIsAuthenticated={setIsAuthenticated} />
                <Switch>
                <Route exact path={path}>
                    <Header/>
                </Route>
                <Route path={`${path}/signin`} exact>
                    <Signin />
                </Route>
                <Route path={`${path}/signup`} exact>
                    <Signup />
                </Route>
                <Route path={`${path}/check`} exact>
                    <Check />
                </Route>
                <Route path={`${path}/premium`} exact>
                    <Premium />
                </Route>
            </Switch>
        <Footer />
        </div>
    )
}
