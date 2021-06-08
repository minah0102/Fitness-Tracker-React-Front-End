import React from "react";

const Greeting = ({user, setUser }) => {
    const handleLogout = () => {
        localStorage.clear();
        setUser(null)
    };

    return (
        <div id="greeting">
            {/* <h1>Hello, {user.username}</h1> */}
            <h1>Welcome!</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default Greeting;