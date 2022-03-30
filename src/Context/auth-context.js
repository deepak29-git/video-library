import { createContext } from "react";
import { useContext, useState } from "react";

const AuthContext=createContext(null);

const AuthProvider=({children})=>{
const [auth,setAuth]=useState(localStorage.getItem("token")?true:false)
    return <AuthContext.Provider value={{auth,setAuth}}>{children}</AuthContext.Provider>
}

const useAuth=()=>useContext(AuthContext);

export {useAuth,AuthProvider}