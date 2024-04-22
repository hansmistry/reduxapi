import React from 'react'
import { Link } from 'react-router-dom'

function Hoc(Component) {
    let Header = () => {
        return (
            <div>
                <div className="d-flex bg-primary mx-auto p-3 " >
                    <div className="d-flex bg-white p-3 m-1 "><Link to={'/form'}>Form</Link></div>
                    <div className="d-flex bg-white p-3 m-1"> <Link to={'/table'}>Table</Link></div>
                </div>
                <div>
                    <Component />
                </div>
            </div>
        )
    }
    return Header
}

export default Hoc