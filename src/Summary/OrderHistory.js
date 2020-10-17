import React, { Component } from "react"
import Aux from "../Auxillary/Auxillary"
import axios from "../axios"

class History extends Component {
    state={
        orderhis:[]
    }

    componentDidMount()
    {
        axios.get("/Orders.json").then((response) => {
            for(let key in response.data)
            {
                if(this.props.name===response.data[key].name)
                {
                    this.state.orderhis.push({                   
                        id:key,
                        prods:response.data[key].products,
                        totalCost:response.data[key].totalCost
                    })
                }
            }
        })
    }
    render(){
          let pro = []
           for(let lis in this.state.orderhis)
           {
            let subpro=[]
            let i=0;
            while(i<this.state.orderhis[lis].prods.length)
            {
                subpro.push(<h2>{Object.keys(this.state.orderhis[lis].prods[i]) +  ":" + Object.values(this.state.orderhis[lis].prods[i])}</h2>)
                i=i+1
            }         
            console.log(this.state.orderhis[lis])
            pro.push(<div className="d-flex flex-column bd-highlight mb-3">    
            <div class="card-body border border-secondary">
            {subpro}
            <h3>Total Cost:Rs.{this.state.orderhis[lis].totalCost}</h3>
            </div>             
        </div>)
           }        

    return(
        <Aux>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#orderhistory">
                    <h1>Orders</h1><span class="sr-only">(current)</span>
            </button>

            <div class="modal fade" id="orderhistory" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel"><em>Your Order History</em></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {pro}
                        </div>
                    </div>
                </div>
            </div>
        </Aux>
      )
    }
}

export default History