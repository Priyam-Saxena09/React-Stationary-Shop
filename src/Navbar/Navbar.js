import React from "react"
import OrderHistory from "../Summary/OrderHistory"
import Costs from "../Summary/Costs"

const Navbar = (props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active mr-5 ml-4">
                    <OrderHistory name={props.name}/>
                </li>
                <li className="nav-item ml-4 mr-5">
                    <Costs />
                </li>
                <li className="nav-item ml-2 pl-5">
                    <h1 className="display-4">Welcome {props.name}</h1>
                </li>
                <li className="nav-item ml-5 pl-5 mt-1">
                    <button type="button" className="btn btn-outline-warning py-3 px-2" onClick={props.logout}>Log Out</button>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar