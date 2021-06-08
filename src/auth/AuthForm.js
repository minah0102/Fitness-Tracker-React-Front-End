import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const AuthForm = ({ setUser }) => {
    const [formType, setFormType] = useState("login");
    return formType === "login" ? (
        <Login 
        setUser={setUser}
        setFormType={setFormType} />
    ) : (
        <Register 
        setUser={setUser}
        setFormType={setFormType} />
    );
};

export default AuthForm;