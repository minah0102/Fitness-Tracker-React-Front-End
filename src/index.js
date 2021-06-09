import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { fetchData, getMe } from "./api";

import {
  Title,
  Home,
  Activities,
  Routines
} from './components';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";

const App = () => {

  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [currentUser, setCurrentUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [routine, setRoutine] = useState({});
  const [activityToUpdate, setActivityToUpdate] = useState({});

  useEffect(async () => {
    if (token) {
      await getMe(token).then((response) => {
        setCurrentUser(response.username);
      });
    }
  }, []);

  useEffect(async () => {
    const data = await fetchData("Activities");
    setActivities(data);
  }, []);

  // return <div className="app">
  //   <Title />
  //   <MenuTab />
  //   <Home />
  //   {/* <Routines /> */}
  //   {/* <Feature /> needs props for featuredResult, as well as setIsLoading and setSearchResults (clicking on searchable properties) */}
  //   <Activities
  //   //{...{featuredResult, setIsLoading, searchResults}}
  //   />
  //   {/* <MyRoutines /> */}

  //   {// isLoading ? <Loading  /> : null 
  //   }
  //   {/* use a ternary and render null if isLoading is false */}
  // </div>

  return (
    <Router>
      <>
        <div className="app">
          <Title />
          <div id="menu-tab">
            <nav>
              <Link to="/" className="button">Home</Link>
              <Link to="/Routines" className="button">Routines</Link>
              <Link to="/Activities" className="button">Activities</Link>
            </nav>
          </div>
          <main>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/Routines">
                <Routines />
              </Route>
              <Route path="/Activities">
                <Activities 
                currentUser={currentUser}
                activities={activities}
                />
              </Route>
            </Switch>
          </main>
          
        </div>
      </>
    </Router>
  )
}


ReactDOM.render(<App />, document.getElementById("app"));