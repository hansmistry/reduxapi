import React, { useEffect } from 'react'
import HocCom from './HocCom'
import { useDispatch, useSelector } from 'react-redux'
import { Deletedataapi, Getapidata } from '../redux/actions/action'
import { Link } from 'react-router-dom'

function ApiTable() {
    const dispatch = useDispatch()
    let state = useSelector(state => state)
    console.log(state.apidata2.userarray)

    useEffect(() => {
        dispatch(Getapidata())
    }, [])

    let Deletedata=(id)=>{
      console.log(id)
      dispatch(Deletedataapi(id))
    }


  return (
    <>
             <table className="table">
        <thead>
          <tr>
            <th>image</th>
            <th>firstName</th>
            <th>lastName</th>
            <th>age</th>
            <th>city</th>
            <th>gender</th>
            <th>hobbies</th>
            <th>Action</th>
          </tr>
        </thead>


        <tbody>
          {
            state.apidata2.userarray?.map((x,i)=>{
                return (
                    <tr>
                        <td>
                            <img src={x.image} width="100" height="50"/>
                        </td>
                    <td>{x.firstName}</td>
                    <td>{x.lastName}</td>
                    <td>{x.age}</td>
                    <td>{x.city}</td>
                    <td>{x.gender}</td>
                    <td>{x.hobbies}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>Deletedata(x._id)}>Dlete</button>
                       <Link to={'/form/'+x._id}> <button className='btn btn-warning '>Edit</button></Link>
                    </td>
                    </tr>
                )
            })
          }
        </tbody>
      </table>
    </>
)
}

export default HocCom(ApiTable)