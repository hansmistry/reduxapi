import axios from "axios"
import { GETPRODATA } from "../Type/types"

export const Getprodata=()=>{
return (dispatch)=>{
    axios.get("https://student-api.mycodelibraries.com/api/product/get").then((res)=>{
        console.log(res.data)
        dispatch({type: GETPRODATA,data:res.data})
    })
}   
}