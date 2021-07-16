import React, { useState, useContext } from "react";
import { UserContext } from "..";
import { registerUser } from "../api";
import { setToken } from "../auth/token";
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Register.css";

const mystyle = {
  padding: "1rem",
  margin: "1rem",
  display: "flex",
  justifyContent: "center",
};


const Register = () => {
  const history = useHistory();
  const { user, setUser, setFormType} = useContext(UserContext);
  
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  

  const submitHandler = async (e) => {
    e.preventDefault();
    if (passwordInput !== confirmPasswordInput) {
      alert("Passwords do not match!");
      setPasswordInput("");
      setConfirmPasswordInput("");
    }
    try {
      const data = await registerUser(usernameInput, passwordInput);
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

  const confirmPasswordChangeHandler = (e) => {
    e.preventDefault();
    setConfirmPasswordInput(e.target.value);
  }

  return (
    <div style={mystyle} className="auth-form">
      <Form style={{ width: "30rem" }}>
        <h3 style={{ margin: "0.7rem" }}>PLEASE Register</h3>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formRegisterUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="username"
            placeholder="username"
            value={usernameInput}
            onChange={usernameChangeHandler}
          />
        </Form.Group>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formRegisterPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={passwordInput}
            onChange={passwordChangeHandler}
          />
          <Form.Text className="text-muted">
            Password must be more than 8 characters.
          </Form.Text>
        </Form.Group>

        <Form.Group style={{ margin: "0.7rem" }} controlId="formRegisterConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPasswordInput}
            onChange={confirmPasswordChangeHandler}
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
  )
};

export default Register;