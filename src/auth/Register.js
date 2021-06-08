import React, { useState } from "react";
import { registerUser } from "../api"

const Register = ({setUser, setFormType }) => {
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        if (passwordInput !== confirmPasswordInput) {
            return alert("Passwords do not match!");
        }

        registerUser(usernameInput, passwordInput).then((user) => {
            setUser(user);
        });
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

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setFormType("login");
    }

    return (<div id="register">
        <h2>PLEASE Register</h2>
        <form onSubmit={submitHandler}>
            <input
            type="text"
            placeholder="username"
            value={usernameInput}
            onChange={usernameChangeHandler}
            />
            <input
            type="password"
            placeholder="password"
            value={passwordInput}
            onChange={passwordChangeHandler}
            />
            <input
            type="password"
            placeholder="confirm password"
            value={confirmPasswordInput}
            onChange={confirmPasswordChangeHandler}
            />
            <button>Submit</button>
        </form>
        <p>Already registered?{" "}
            <button onClick={handleRegisterClick}>Login Here</button>
        </p>
    </div>);
};

export default Register;