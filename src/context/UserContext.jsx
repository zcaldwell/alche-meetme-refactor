import { createContext, useContext, useState } from "react";

export const UserContext = createContext()

const UserPRovider = ({ children }) => {
    const [user, setUser] = useState('')

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

const useUser = () => 