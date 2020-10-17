import React from "react"
import "./Products.css"

const Products = (props) => {    
        return(
                <div className="d-flex flex-row bd-highlight mb-3">
                    <div class="p-2 bd-highlight"><h2>{props.product}:</h2></div>                  
                    <div class="p-2 bd-highlight"><h3>{props.amount}</h3></div>
                </div>
        )
    }


export default Products