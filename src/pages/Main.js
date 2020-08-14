import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import { Navs } from './components/main/Navs'
import { Drawer } from './components/main/Drawer'
import { Body } from './components/main/Body'
import './main.css'
export const Main = () => {
    const { path } = useRouteMatch()
    return (
        <div>
            <Navs />
            <div className='container-fluid'>
                <div className='row'>
                    <Drawer />
                    <main role="main" className="">
                <div
                    className="pt-3 pb-2 mb-3 border-bottom">

                    <Switch>
                        <Route exact path={path}>
                            <Body />
                        </Route>
                        {/* <Route path={`${path}/signin`}>
                            <Signin />
                        </Route>
                        <Route path={`${path}/signup`}>
                            <Signup />
                        </Route>
                        <Route path={`${path}/check`}>
                            <Check />
                        </Route>
                        <Route path={`${path}/premium`}>
                            <Premium />
                        </Route> */}
                    </Switch>
                    </div>
                    </main>
                </div>
            </div>
            {/* <Footer /> */}

        </div>
    )
}
