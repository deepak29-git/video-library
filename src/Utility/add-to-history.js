import axios from "axios"
import { getToken } from "./get-token"

export const addToHistory=async(video,setHistory)=>{
    try{
        const {data}=await axios.post("/api/user/history",
        {
            video
        },
        {
            headers:{
                authorization:getToken()
            }
        }
        )
        setHistory(data.history)
    }catch(error){
        console.log(error)
    }
} 