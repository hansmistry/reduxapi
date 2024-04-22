import React, { useEffect } from 'react'
import ProHoc from './ProHoc'
import { useDispatch, useSelector } from 'react-redux'
import { Getprodata } from '../redux/Actions/actions'

function ProTable() {
    let dispatch = useDispatch()
    let state = useSelector(state => state)
    console.log(state.prodata.proarray.data)

    useEffect(() => {
        dispatch(Getprodata())
    }, [])


    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>category</th>
                        <th>productName</th>
                        <th>price</th>
                        <th>clothSize</th>
                        <th>description</th>
                        <th>inStock</th>
                        <th>Action</th>
                    </tr>
                </thead>


                <tbody>
                    {
                        state.prodata.proarray.data?.map((x, i) => {
                            return (
                                <tr key={i}>
                                    <td>{x.category}</td>
                                    <td>{x.productName}</td>
                                    <td>{x.price}</td>
                                    <td>{x.clothSize}</td>
                                    <td>{x.description}</td>
                                    <td>{x.inStock}</td>

                                    {/* <td>
                                        <button className="btn btn-danger" onClick={() => Deletedata(x._id)}>Delete</button>
                                        <Link to={"/form/" + x._id}><button className="btn btn-warning">Edit</button></Link>
                                    </td> */}
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ProHoc(ProTable)