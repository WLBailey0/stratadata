import React, { createContext, useState } from "react";



function UserProvider({ children }){
    const [isAuth, setIsAuth] = useState(false);

    const setUserAuthentication = () => {
        setIsAuth(true)
    }

    return (
        <UserContext.Provider
            value = {{
                isAuth,
                setUserAuthentication,
            }}
            >
                {children}
        </UserContext.Provider>
    )

}



const UserContext = createContext(null);

export { UserContext, UserProvider };