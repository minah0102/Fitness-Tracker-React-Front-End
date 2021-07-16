import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import { Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import {
  Title,
  Header,
  Home,
  Register,
  Login,
  Activities,
  MyRoutines,
  AddNewRoutine,
  AddNewActivity,
  Routines
} from './components';


import { fetchData, getMe } from "./api";
import { getToken } from './auth/token';

export const UserContext = React.createContext();

const App = () => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [currentUser, setCurrentUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [routine, setRoutine] = useState({});
  const [routines, setRoutines] = useState([]);
  const [myRoutines, setMyRoutines] = useState([]);
  const [activityToUpdate, setActivityToUpdate] = useState({});
  const [modalShow, setModalShow] = useState(false);

  const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api'

  useEffect(async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/users/me`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + token,
          },
        }
      );
      const user = await response.json();
      if (user.error) return setUser(null);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(async () => {
    if (token) {
      await getMe(token).then((response) => {
        setCurrentUser(response.username);
      });
    }
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/routines`)
      .then((response) => {
        setRoutines(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  

  useEffect(() => {
    axios
      .get(`${BASE_URL}/activities`)
      .then((response) => {
        setActivities(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(async () => {
  //   if (token) {
  //     await getMe(token).then((response) => {
  //       setCurrentUser(response.username);
  //     });
  //   }
  // }, []);

  useEffect(async () => {
    const data = await fetchData("Activities");
    setActivities(data);
  }, []);



  return (
    <Router>
      <div id="app">
        <UserContext.Provider
          value={{
            user,
            setUser,
            currentUser,
            setCurrentUser,
            token,
            setToken,
            routine,
            setRoutine,
            routines,
            setRoutines,
            activities,
            setActivities,
            activityToUpdate,
            setActivityToUpdate,
            modalShow,
            setModalShow
          }}
        >
          <Title />
          <Header />

          <Container>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/register">
                <Register />
              </Route>

              <Route exact path="/login">
                <Login />
              </Route>

              <Route path="/routines">
                <Routines />
              </Route>

              <Route exact path="/activities">
                <Activities />
              </Route>

              <Route exact path="/myroutines">
                <MyRoutines />
              </Route>

            </Switch>
          </Container>
        </UserContext.Provider>
      </div>
    </Router>
  )

  // return (
  //   <Router>
  //     <>
  //       <div className="app">
  //         <Title />
  //         <div id="menu-tab">
  //           <nav>
  //             <Link to="/" className="button">Home</Link>
  //             <Link to="/Routines" className="button">Routines</Link>
  //             <Link to="/Activities" className="button">Activities</Link>
  //             <Link to="/myroutines" className="button">My Routines</Link>
  //           </nav>
  //         </div>
  //         <main>
  //           <Switch>
  //             <Route exact path="/">
  //               <Home />
  //             </Route>

  //             <Route path="/Routines">
  //               <Routines />
  //             </Route>

  //             <Route path="/myroutines">
  //               {currentUser ? (
  //                 <MyRoutines
  //                   {...{
  //                     setActivityToUpdate,
  //                     setRoutine,
  //                     currentUser,
  //                     token,
  //                     activities,
  //                   }}
  //                 />
  //               ) : null}
  //             </Route>

  //             <Route path="/AddNewRoutine">
  //               <AddNewRoutine {...{ token }} />
  //             </Route>

  //             <Route path="/Activities">
  //               <Activities
  //                 currentUser={currentUser}
  //                 activities={activities}
  //               />
  //             </Route>

  //             <Route path="/AddNewActivity">
  //               <AddNewActivity {...{ token }} />
  //             </Route>
  //           </Switch>
  //         </main>

  //       </div>
  //     </>
  //   </Router>
  // )
}


render(<App />, document.getElementById("main"));