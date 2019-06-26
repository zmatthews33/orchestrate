import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import useLoggedIn from "./Utils/useLoggedIn";

import SideNavigation from "./Components/Navigation/SideNavigation";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import Bands from "./Pages/Bands";
import Band from "./Pages/Band";
import Todos from "./Pages/Todos";
import Profile from "./Pages/Profile";
import Venues from "./Pages/Venues";
import Contacts from "./Pages/Contacts";

import "./Styles/index.scss";
import NewArtistPage from "./Pages/NewArtistPage";

const AppContext = React.createContext();

function App() {
  const loggedIn = useLoggedIn();

  return (
    <AppContext.Provider>
      <div className="appContainer">
        <Router>
          <SideNavigation loggedIn={loggedIn} />
          {loggedIn ? (
            <Switch>
              <Route path="/bands" component={Bands} />
              <Route path="/band" component={Band} />
              <Route path="/addartist" component={NewArtistPage} />
              <Route path="/events/:eventId?" component={Events} />
              <Route path="/profile" component={Profile} />
              <Route path="/todos" component={Todos} />
              <Route path="/venues" component={Venues} />
              <Route path="/contacts" component={Contacts} />
              <Route path="/" component={Home} />
            </Switch>
          ) : (
            <Switch>
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/" exact component={Home} />
              <Route render={props => <Redirect to="/" />} />
            </Switch>
          )}
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export { AppContext, App };
