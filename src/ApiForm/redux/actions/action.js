import axios from "axios"
import { ADDDATA, GETAPIDATA } from "../types/types"

export const Getdata=()=>{
    return (dispatch)=>{
        axios.get("https://student-api.mycodelibraries.com/api/student/get").then((res)=>{
            console.log(res.data.data)
            dispatch({type:GETAPIDATA,data:res.data.data})
        })
    }
}

export const addData=(obj)=>{
    return (dispatch) =>{
        axios.post("https://student-api.mycodelibraries.com/api/student/add",obj).then((res)=>{
            console.log(res.data.data)
            dispatch(Getdata())
        })
    }
}

export const Dleteapidata=(id)=>{
    console.log(id)
    return (dispatch) =>{
        axios.delete("https://student-api.mycodelibraries.com/api/student/delete?id="+id).then((res)=>{
            console.log(res.data)
            dispatch(Getdata())
        })
    }
}

export const Editdata=(obj)=>{
    console.log(obj)
    obj.id = obj._id
    return (dispatch) =>{
        axios.post("https://student-api.mycodelibraries.com/api/student/update",obj).then((res)=>{
            console.log(res.data)
            dispatch(Getdata())
        })
    }
}