import React, {useEffect, useState} from 'react';
import { AuthForm, Greeting } from "../auth"
import { getToken } from "../auth/token"
import {BASE_URL} from "../api";

const Home = () => {
  const [user, setUser] = useState(null);
  //const [login, setLogin] = useState("")
  
  useEffect(async () => {
    await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    })
    .then((d) => d.json())
    .then((u) => {
      if (u) setUser(u);
    });
  }, []);
  
  return <div id="home">
    <h1>Fitness Tracker</h1>
    <p>
      Login/Sign Up to use our fitness tracker.
      </p>
      <>
      {user ? (
        <Greeting 
        user={user}
        setUser={setUser} />
      ) : (
        <AuthForm setUser={setUser} />
      )}
      </>
  </div>
};

export default Home;

{/* <input type="text" class="username" placeholder="Username" />
      <input type="text" class="password" placeholder="Password" /><br /> */}