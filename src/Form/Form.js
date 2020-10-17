import React from "react"

const form = (props) => {
    return(
        <form className="container">
            <div class="form-group">
                <label for="Address">Address</label>
                <input type="text" class="form-control" id="Address" aria-describedby="emailHelp" onChange={props.formval}/>
            </div>
            <div class="form-group">
                <label for="Street">Street</label>
                <input type="text" class="form-control" id="Street" onChange={props.formval}/>
            </div>
            <div class="form-group">
                <label for="Number">Number</label>
                <input type="number" class="form-control" id="Number" onChange={props.formval}/>
            </div>
            <div class="form-group">
                <label for="Pin-Code">Pin-Code</label>
                <input type="number" class="form-control" id="Pin-Code" onChange={props.formval}/>
            </div>
            <button type="submit" class="btn btn-primary mb-4" onClick={props.submit}>Submit</button>
        </form>
    ) 
}

export default form