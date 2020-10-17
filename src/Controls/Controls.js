import React, { Component } from "react"
import Control from "./Control/Control"
import Summary from "../Summary/Summary"

class Controls extends Component{
    state = {
        prods:["Lined Register","Pen","Pencil","Plane Register","Small NoteBook"]
    }
    render(){
        const style = {
            "background-color":"cyan"
        }
        let i=0;
        let lis = this.state.prods.map(li => {
           return <Control prod={li} add={() => this.props.add(li)} rem={() => this.props.rem(li)} addstat={this.props.addstat} stat={this.props.stat[i++]}/>
        })
        return(
            <div class="d-flex flex-column bd-highlight justify-content-center align-items-center" style={style}>
                <div class="pl-3 bd-highlight"><h1>ORDER NOW</h1></div>
                <div class="pl-2 bd-highlight mb-4"><h1 className="display-3">TOTAL COST:Rs.{this.props.total}</h1></div>
                <div class="bd-highlight">
                   {lis}
                </div>
                <Summary order={this.props.order} products={this.props.products} total={this.props.total} check={this.props.check}/>
            </div>
        )
    }
}

export default Controls