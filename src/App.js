import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import ReactWebMediaPlayer from 'react-web-media-player';

import Sidebar from './pages/components/home/Sidebar'
import './App.scss'
import { Home } from './pages/Home'
import { Dash } from './pages/Dash'
import { Main } from "./pages/Main";
// import Nav from './components/Nav'
// import Main from './components/Main'
const NewMain = ({ setIsAuthenticated }) => {
  return (
    <div className="outerWrap">
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path='/'>
            <Home setIsAuthenticated={setIsAuthenticated} />

          </Route>
        </Switch>
      </div>
      <div className="musicControls">
        <audio controls className='bg-dark'>
          <source src="" type="audio/ogg" />


        </audio>


      </div>
    </div>
  )
}
// const OldMain=()=>{
//   return(
//     <div className="outerWrap">
//       <div className="App">
//         <Nav />
//         <Main />
//       </div>
//       <div className="musicControls">music controls</div>
//     </div>
//   )
// }
const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  return (


    <Router>
      <div>
        {isAuthenticated ? (<Switch>
          <Route path="/">
            <NewMain setIsAuthenticated={setIsAuthenticated} />
          </Route>
        </Switch>) : (<Switch>
          <Route path="/de">
            <Dash setIsAuthenticated={setIsAuthenticated} />
          </Route>
        </Switch>)}

      </div>
    </Router>
  );
}

export default App