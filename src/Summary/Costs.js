import React from "react"
import Aux from "../Auxillary/Auxillary"

const costs = () => {
    let costs = {"Small NoteBook":35,
    "Lined Register":60,
    "Plane Register":75,
    "Pen":20,
    "Pencil":10
}
    let co = []
    for(let key in costs)
    {
        co.push(<h2>{key +  ":Rs." + costs[key]}</h2>)
    }
    return(
        <Aux>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#costs">
                    <h1>Shop</h1><span class="sr-only">(current)</span>
            </button>

            <div class="modal fade" id="costs" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel"><em>Prices of All the Available Products</em></h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body border border-primary">
                            {co}
                        </div>
                        <h3>Note:</h3>
                        <b>1.Just Click on add button of product that you want to buy</b>
                        <b>2.Just Click on Remove button of product to remove it from your cart</b>
                    </div>
                </div>
            </div>
        </Aux>
    )
}

export default costs