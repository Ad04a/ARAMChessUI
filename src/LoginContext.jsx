import React, {createContext, useContext, useState}from 'react'

const loginContext = createContext()

function useLoginContext(){
    return useContext(loginContext)
}

function LoginContextProvider({children}){
    var [isLoggedIn,setIsLoggedIn] = useState(false)


    return (
        <loginContext.Provider value={{isLoggedIn, setIsLoggedIn}}>
            {children}
        </loginContext.Provider>

    )
}

export{useLoginContext, LoginContextProvider}