import React, {createContext, useContext}from 'react'

const loginContext = createContext()

function useLoginContext(){
    return useContext(loginContext)
}

function LoginContextProvider({children}){

    function SaveLoginContext(props){
        localStorage.setItem("isLoggedIn", props.isLoggedIn)
    } 

    function GetLoginContext(){
        const props = {isLoggedIn : (localStorage.getItem("isLoggedIn") === 'true')}
        return props
    } 

    return (
        <loginContext.Provider value={{GetLoginContext, SaveLoginContext}}>
            {children}
        </loginContext.Provider>

    )
}

export{useLoginContext, LoginContextProvider}