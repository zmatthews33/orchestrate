import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import useLoggedIn from "./Utils/useLoggedIn";

import SideNavigation from "./Components/Navigation/SideNavigation";
import TopNavigation from "./Components/Navigation/TopNavigation";
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

import useWindow from "./Utils/useWindow";

import "./Styles/index.scss";

function App() {
  const [NavToggled, setNavToggled] = useState(false)
  const loggedIn = useLoggedIn();
  const smallScreen = useWindow();

  const contentContainerClass = () => {
    if (smallScreen) {
      if (NavToggled) return 'contentContainer smallScreen navShown'
      return 'contentContainer smallScreen'
    }
    return 'contentContainer'
  }

  console.log(smallScreen)

  return (
    <div className="appContainer">
      <Router>
        <SideNavigation loggedIn={loggedIn} smallScreen={smallScreen} setNavToggled={setNavToggled} />
        <div className={contentContainerClass()}>
          <TopNavigation loggedIn={loggedIn} smallScreen={smallScreen} navToggled={NavToggled} setNavToggled={setNavToggled} />
          {loggedIn ? (
            <Switch>
              <Route path="/bands" component={Bands} />
              <Route path="/band" component={Band} />
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
        </div>
      </Router>
    </div>
  );
}

export default App;
