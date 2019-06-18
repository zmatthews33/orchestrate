import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import useLoggedIn from "./Utils/useLoggedIn";

import TopNavigation from "./Components/Navigation/TopNavigation";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Events from './Pages/Events'
import Bands from './Pages/Bands'
import Band from './Pages/Band'

import './Styles/index.scss'

function App() {
  const loggedIn = useLoggedIn();

  return (
    <div className="appContainer">
      <Router>
        <TopNavigation />
        {loggedIn ? (
          <Switch>
            <Route path="/bands" component={Bands} />
            <Route path="/band" component={Bands} />
            <Route path="/events" component={Events} />
            <Route path="/" component={Home} />
          </Switch>
        ) : (
          <Route path="/login" component={Login} />
        )}
      </Router>
    </div>
  );
}

export default App;
