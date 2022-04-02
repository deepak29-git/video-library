import { createContext,useContext,useState } from "react";

const HistoryContext=createContext(null);

const HistoryProvider=({children})=>{
    const [history,setHistory]=useState([])
    return <HistoryContext.Provider value={{history,setHistory}}>{children}</HistoryContext.Provider>
}

const useHistory=()=>useContext(HistoryContext);

export {useHistory,HistoryProvider}