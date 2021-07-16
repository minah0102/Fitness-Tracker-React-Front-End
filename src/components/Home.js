import React, { useContext } from 'react';
import { UserContext } from '..';
import "./Home.css";
import { Container } from 'react-bootstrap';


const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <Container className="home">
      {user ? (
        <div className="welcome-logged-in-user">
          <h1>Welcome, {user.username}</h1>
          <h5>Please enjoy Fitness Tracker.</h5>
        </div>
      ) : (
        <div className="welcome-future-user">
          <h1>Welcome to Fitness Tracker</h1>
          <h5>Login/Sign Up to use our fitness tracker.</h5>
        </div>
      )}
    </Container>
  )
};

export default Home;