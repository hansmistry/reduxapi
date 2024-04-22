import React, { useState } from 'react'
// import ProHoc from '../Formcom/ProHoc.jsx'
import proHoc from '../Formcom/ProHoc.jsx'

function ProForm() {
    const [obj, setObj] = useState({ hobbies: [] })
    const [blankobj, setBlankobj] = useState({hobbies:[]})


    let getdatform = (e) => {
        // if(e.target.name)

    }

    let submitForm = () => {
        console.log(obj)

    }

    return (
        <>
            <form action="" className="w-75 mx-auto shadow-lg p-3 mt-3 ">
                <label className="d-block">category</label>
                <input
                    type="text"
                    name="category"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.category}
                /><br /><br />
                <label className="d-block">productName</label>
                <input
                    type="text"
                    name="productName"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.productName}
                /><br /><br />
                <label className="d-block">price</label>
                <input
                    type="number"
                    name="price"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.price}
                /><br /><br />
                <label className="d-block">description</label>
                <input
                    type="text"
                    name="description"
                    className="w-100"
                    onChange={getdatform}
                    value={obj.description}
                /><br /><br />
                <label className="d-block">clothSize</label>
                <input
                    type="radio"
                    name="clothSize"
                    className="m-2"
                    onChange={getdatform}
                    value={"XL"}
                    checked={obj.clothSize === "XL"}
                />
                XL
                <input
                    type="radio"
                    name="clothSize"
                    className="m-2"
                    value={"L"}
                    onChange={getdatform}
                    checked={obj.clothSize === "L"}
                />
                L
                <input
                    type="radio"
                    name="clothSize"
                    className="m-2"
                    value={"M"}
                    onChange={getdatform}
                    checked={obj.clothSize === "M"}
                />
                M <br /><br />





                <button className="btn btn-danger" type="button" onClick={submitForm}>
                    Save
                </button>
            </form>
        </>
    )
}

export default proHoc(ProForm)