import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const UserContext = React.createContext({
    user: null,
    onLogin: () => {},
    onLogout: () => {}
});

export const UserContextProvider = (props) => {

    const history = useHistory();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    const onLogin = (data) => {
        setIsLoggedIn(true);
        const newUser = {
            name: data.name,
            userName: data.username,
            email: data.email,
            phone: data.number,
            registeredOn: data.date,
            college: data.collegeName,
            reg_events: data.eventsRegistered
        };
        setUser(newUser);
        history.push("/profile");
    }

    const onLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <UserContext.Provider
            value={{
                isLoggedIn,
                user,
                onLogin,
                onLogout
            }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContext;