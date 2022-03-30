import { createContext,useReducer,useContext } from "react";
import { likeReducer } from "../Reducer/like-reducer";


const LikeContext=createContext(null);

const LikeProvider=({children})=>{
    const [likeState,likeDispatch]=useReducer(likeReducer,{
        likedVideo:[]
    })
    return <LikeContext.Provider value={{likeState,likeDispatch}}>{children}</LikeContext.Provider>
}

const useLike=()=>useContext(LikeContext)

export {LikeProvider,useLike}