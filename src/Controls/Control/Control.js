import React from "react"
import "./Control.css"

const control = (props) => {
    return (
    
            <div class="row mb-4">
                <div class="col-sm"><b>{props.prod}:</b></div>
                <div class="col-sm"><button type="button" className="btn btn-outline-success" onClick={props.add} disabled={!props.addstat}><i>Add</i></button></div>
                <div class="col-sm"><button type="button" className="btn btn-outline-danger" onClick={props.rem} disabled={!props.stat}><i>Remove</i></button></div>
            </div>
    )
}
export default control