import React, { useEffect } from "react";
import Hoc from "./Hoc";
import { useDispatch, useSelector } from "react-redux";
import { Dleteapidata, Getdata } from "../redux/actions/action";
import { Link } from "react-router-dom";

function Tableapi() {
  let state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(state.apidata.array)

  useEffect(() => {
    dispatch(Getdata())
  }, [])

  let Deletedata = (id) => {
    console.log(id)
    dispatch(Dleteapidata(id))
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>firstName</th>
            <th>lastName</th>
            <th>age</th>
            <th>City</th>
            <th>gender</th>
            <th>Hobbies</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>
          {
            state.apidata.array?.map((x, i) => {
              return (
                <tr key={i}>
                  <td>{x.firstName}</td>
                  <td>{x.lastName}</td>
                  <td>{x.age}</td>
                  <td>{x.city}</td>
                  <td>{x.gender}</td>
                  <td>{x.hobbies}</td>
                  <td>
                    <button className="btn btn-danger" onClick={() => Deletedata(x._id)}>Delete</button>
                    <Link to={"/form/"+x._id}><button className="btn btn-warning">Edit</button></Link>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  );
}

export default Hoc(Tableapi);
