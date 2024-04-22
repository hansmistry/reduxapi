import React, { useEffect, useState } from 'react'
import HocCom from './HocCom'
import { useDispatch } from 'react-redux'
import { Adddata, Editdataapi, Getapidata } from '../redux/actions/action'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function ApiForm() {
    let params = useParams()
    let navigate=useNavigate()
    const [obj, setObj] = useState({ hobbies: [] })
    const [blankobj, setblankobj] = useState({ hobbies: [] })
    const dispatch = useDispatch()

    useEffect(() => {
        if (params.id) {
            axios.get("https://student-api.mycodelibraries.com/api/user/get-user-by-id?id=" + params.id).then((res) => {
                console.log(res.data)
                setObj({ ...res.data.data,hobbies:res.data.data.hobbies.split(",")})

            })
        }
    }, [params.id])



    let getdatform = (e) => {
        if (e.target.name == 'hobbies') {
            if (e.target.checked) {
                obj.hobbies.push(e.target.value)
            } else {
                obj.hobbies = obj.hobbies.filter((x) => x != e.target.value)
            }
        } else if (e.target.name === 'image') {
            obj[e.target.name] = e.target.files[0]
            blankobj.userImage = ''
        }
        else {
            obj[e.target.name] = e.target.value
            blankobj[e.target.name] = ''
        }
        console.log(obj)
        setObj({ ...obj })
    }

    let submitForm = () => {
        let formData1 = new FormData()
        formData1.append("firstName", obj.firstName)
        formData1.append("lastName", obj.lastName)
        formData1.append("age", obj.age);
        formData1.append('city', obj.city)
        formData1.append('gender', obj.gender)
        formData1.append("userImage", obj.image)
        formData1.append("hobbies", obj.hobbies)
        // console.log(formData)

        if (params.id) {
            formData1.append('id', params.id)
            dispatch(Editdataapi(formData1))
        } else {
            dispatch(Adddata(formData1))
        }

        setObj({ ...blankobj })
        setTimeout(()=>{
            navigate("/table")
        },100)


    }



    return (
        <>
            <form action="" className="w-75 mx-auto shadow-lg p-3 mt-3 ">
                <label className="d-block">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.firstName}
                />
                <label className="d-block">lastName</label>
                <input
                    type="text"
                    name="lastName"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.lastName}
                />
                <label className="d-block">age</label>
                <input
                    type="number"
                    name="age"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.age}
                />
                <label className="d-block">city</label>
                <input
                    type="text"
                    name="city"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.city}
                />
                <label className="d-block">gender</label>
                <input
                    type="radio"
                    name="gender"
                    className=""
                    onChange={getdatform}
                    value={"male"}
                    checked={obj.gender === "male"}
                />
                male
                <input
                    type="radio"
                    name="gender"
                    className=""
                    value={"female"}
                    onChange={getdatform}
                    checked={obj.gender === "female"}
                />
                female <br />
                <label className="d-block">hobbies</label>
                <input
                    type="checkbox"
                    value={"football"}
                    name="hobbies"
                    className=""
                    onChange={getdatform}
                    checked={obj.hobbies.includes("football")}
                />{" "}
                football
                <input
                    type="checkbox"
                    name="hobbies"
                    value={"cricket"}
                    className=""
                    onChange={getdatform}
                    checked={obj.hobbies.includes("cricket")}
                />{" "}
                cricket
                <input
                    type="checkbox"
                    name="hobbies"
                    value={"basketball"}
                    className=""
                    onChange={getdatform}
                    checked={obj.hobbies.includes("basketball")}
                />
                basketball <br />

                <label className="d-block">Profile</label>
                <input type="file" name='image' onChange={getdatform} /> <br /><br />

                <button className="btn btn-danger" type="button" onClick={submitForm}>
                    Save
                </button>
            </form>
        </>
    )
}

export default HocCom(ApiForm)