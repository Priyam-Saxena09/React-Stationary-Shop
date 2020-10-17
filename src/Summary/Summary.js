import React, { Component } from "react"
import Aux from "../Auxillary/Auxillary"
class Summary extends Component {  

    render(){
        let prods = []
        for(let key in this.props.products)
        {
            prods.push(<div className="d-flex flex-row bd-highlight mb-3">
            <div class="p-2 bd-highlight"><h2>{key}:</h2></div>                  
            <div class="p-2 bd-highlight"><h3>{this.props.products[key]}</h3></div>
        </div>)
        }      
        
    return(
        <Aux>
        <div class="p-2 bd-highlight"><button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#summary" disabled={!this.props.order}><i>ORDER</i></button>
        </div>
        <div class="modal fade" id="summary" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel"><em>Your Order</em></h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                            <div class="card">
                                <h1>Here is Your ORDER</h1>
                            </div>
                            <div class="card-body">
                                    {prods}
                                    <h3>Total Cost:Rs.{this.props.total}</h3>
                            </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={this.props.check} data-dismiss="modal">Order Now</button>
                    </div>
                </div>
            </div>
        </div>
        </Aux>
    )
    }
}

export default Summary