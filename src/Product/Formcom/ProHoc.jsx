import React from 'react'
import { Link } from 'react-router-dom'

function proHoc(Component) {
    let Header = () => {
        return (
            <>
                <div className="d-flex bg-black mx-auto p-3 " >
                    <div className="btn btn-danger  d-flex p-3 m-1 "><Link to={'/form'}>Form</Link></div>
                    <div className="btn btn-danger  d-flex p-3 m-1"> <Link to={'/table'}>Table</Link></div>
                </div>
                <div>
                    <Component />
                </div>
            </>
        )
    }

    return Header
}

export default proHoc