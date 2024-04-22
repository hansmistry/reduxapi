import axios from "axios"
import { Getdata } from "../types/types"


export const Getapidata=()=>{
    return (dispatch)=>{
        axios.get("https://student-api.mycodelibraries.com/api/user/get").then((res)=>{
            console.log(res.data.data)
            dispatch({type:Getdata,data:res.data.data})
        })
    }
}

export const Adddata=(obj)=>{
    console.log(obj)
    return (dispatch)=>{
        axios.post("https://student-api.mycodelibraries.com/api/user/add",obj).then((res)=>{
            console.log(res.data)
            dispatch(Getapidata())
        })
    }
}

export const Deletedataapi=(id)=>{
    console.log(id)
    return (dispatch)=>{
        axios.delete("https://student-api.mycodelibraries.com/api/user/delete?id="+id).then((res)=>{
            console.log(res.data)
            dispatch(Getapidata())
        })
    }
}

export const Editdataapi=(obj)=>{
    console.log(obj)
    return (dispatch)=>{
        axios.post("https://student-api.mycodelibraries.com/api/user/update",obj).then((res)=>{
            console.log(res.data)
            dispatch(Getapidata())
        })
    }
}