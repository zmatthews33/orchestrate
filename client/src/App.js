import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import useLoggedIn from "./Utils/useLoggedIn";

import TopNavigation from "./Components/Navigation/TopNavigation";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp"
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Bands from "./Pages/Bands";
import Band from "./Pages/Band";
import Profile from "./Pages/Profile";
import Venues from "./Pages/Venues";

import "./Styles/index.scss";

const AppContext = React.createContext();

function App() {
  const loggedIn = useLoggedIn();

  return (
    <AppContext.Provider>
      <div className="appContainer">
        <Router>
          <TopNavigation loggedIn={loggedIn} />
          {loggedIn ? (
            <Switch>
              <Route path="/bands" component={Bands} />
              <Route path="/band" component={Band} />
              <Route path="/events/:eventId?" component={Events} />
              <Route path="/profile" component={Profile} />
              <Route path="/venues" component={Venues} />
              <Route path="/" component={Home} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/" exact component={Home} />
              <Route render={props => (<Redirect to="/" />)}/>
            </Switch>
          )}
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export { AppContext, App };
