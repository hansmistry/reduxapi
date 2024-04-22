import React, { useEffect, useState } from "react";
import Hoc from "./Hoc";
import { useDispatch, useSelector } from "react-redux";
import { addData, Editdata } from "../redux/actions/action";
import { useParams } from "react-router-dom";
import axios from "axios";

function Formapi() {
  const params = useParams()
  const [obj, setObj] = useState({ hobbies: [] })
  const [blankobj, setBlankobj] = useState({ hobbies: [] })
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  console.log(state)
  console.log(params.id)

  useEffect(() => {
    if (params.id) {
      axios.get("https://student-api.mycodelibraries.com/api/student/get-student-by-id?id=" + params.id).then((res) => {
     
       
      
        console.log(res.data.data,obj.hobbies)
       
        setObj({ ...res.data.data })
      })
    }

  }, [params.id])



  let getdatform = async (e) => {
    if (e.target.name === "hobbies") {
      if (e.target.checked) {
        obj.hobbies.push(e.target.value);
      } else {
        obj.hobbies = obj.hobbies.filter((x) => x !== e.target.value);
      }
      blankobj.hobbies = [];
    } else {
      obj[e.target.name] = e.target.value;
      blankobj[e.target.name] = "";
    }

    setObj({ ...obj });
    setBlankobj({ ...blankobj });

  }

  let submitForm = () => {
    console.log(obj)
    if (params.id) {
      dispatch(Editdata(obj))
    } else {
      dispatch(addData(obj));
    }
    setObj({ ...blankobj });
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
       
        <button className="btn btn-primary" type="button" onClick={submitForm}>
          Save
        </button>
      </form>
    </>
  );
}

export default Hoc(Formapi)
