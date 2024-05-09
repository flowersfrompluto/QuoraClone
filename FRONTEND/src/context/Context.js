import { useEffect, createContext, useState } from "react";

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState()
    const profile = localStorage.getItem("loggedinuser")
    useEffect(() => {
        if (profile){
            const user = JSON.parse(profile)
            setCurrentUser(user)
        }
    }, [profile])
    return (<GlobalContext.Provider value={{currentUser, setCurrentUser}}>{children}</GlobalContext.Provider>)
}

export default GlobalProvider;