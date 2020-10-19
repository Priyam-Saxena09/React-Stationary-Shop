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
                <li className="nav-item active mr-5 mb-2 mt-2 ml-5">
                    <OrderHistory name={props.name}/>
                </li>
                <li className="nav-item ml-4 mr-5 mb-2 mt-2">
                    <Costs />
                </li>
                <li className="nav-item mt-2 mr-lg-5">
                    <h1 className="display-4">Welcome {props.name}</h1>
                </li>
                <li className="nav-item ml-lg-5 mt-1">
                    <button type="button" className="btn btn-outline-warning mt-3" onClick={props.logout}>Log Out</button>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default Navbar