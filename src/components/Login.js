import React, { useState, useContext } from "react";
import { UserContext } from "..";
import { loginUser } from "../api";
import { setToken } from "../auth/token";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const mystyle = {
  padding: "1rem",
  margin: "1rem",
  display: "flex",
  justifyContent: "center",
};

const Login = () => {
  const history = useHistory();
  const { user, setUser, setFormType, token} = useContext(UserContext);

  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser(usernameInput, passwordInput);
      setToken(data.token);
      setUser(data.user);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  const usernameChangeHandler = (e) => {
    e.preventDefault();
    setUsernameInput(e.target.value);
  };

  const passwordChangeHandler = (e) => {
    e.preventDefault();
    setPasswordInput(e.target.value);
  };

  return (
    <div style={mystyle} className="auth-form">
      <Form style={{ width: "30rem" }}>
        <h2 style={{ margin: "0.7rem" }}>Please Login</h2>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formLoginUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="Enter username"
            value={usernameInput}
            onChange={usernameChangeHandler}
          />
        </Form.Group>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formLoginPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={passwordInput}
            onChange={passwordChangeHandler}
          />
        </Form.Group>

        <Button
          style={{ margin: "0.7rem" }}
          variant="primary"
          type="submit"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;