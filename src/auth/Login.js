import React, { useState } from "react";
import { loginUser } from "../api";

const Login = ({ setUser, setFormType }) => {
    const [usernameInput, setUsernameInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        loginUser(usernameInput, passwordInput).then((user) => {
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

    const handleRegisterClick = (e) => {
        e.preventDefault();
        setFormType("register");
    }
    return (<div id="login">
        <h2>PLEASE LOGIN</h2>
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
            <button>Submit</button>
        </form>
        <p>Not registered?{" "}
            <button onClick={handleRegisterClick}>Sign Up Here</button>
        </p>
    </div>);
};

export default Login;