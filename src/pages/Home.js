import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import Categories from './components/home/Categories'
import PlaylistPage from './components/home/PlaylistPage'

import TopBar from './components/home/TopBar'
export const Home = ({setIsAuthenticated}) => {
    const { url, path } = useRouteMatch()
    return (
        <div className='main'>
            <TopBar setIsAuthenticated={setIsAuthenticated} />
            <div className='mainContent'>

                <Switch>
                    <Route exact path={path}>
                        <Categories />
                    </Route>
                    {/* <Route path={`${path}/search`}>
                        <Search />
                    </Route>
                    <Route path={`${path}/library`}>
                        <Library />
                    </Route> */}
                    <Route path={`/de/playlist/:id`}>
                        <PlaylistPage />
                    </Route>
                </Switch>
            </div>

        </div>
    )
}
{/*
    // // const NewMain=()=>{
// //   return(
// //     <div className="outerWrap">
// //       <div className="App">
// //         <Nav />
// //         <Main />
// //       </div>
// //       <div className="musicControls">music controls</div>
// //     </div>
// //   )
// // }

    
    
    
    <div className="main">
      <Header />
      <div className="mainContent">
        <Switch>
          <Route path="/main" exact component={Categories}></Route>
          <Route path="/search">Search</Route>
          <Route path="/your-library">Your library</Route>
          <Route path="/main/playlist/:id" component={PlaylistPage}></Route>

        </Switch>
      </div>
    </div> */}
