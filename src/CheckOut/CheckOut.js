import React, { Component } from "react"
import Aux from "../Auxillary/Auxillary"
import "./CheckOut.css"
import Form from "../Form/Form"
import axios from "../axios"

class CheckOut extends Component{
    state={
        cred:{
            "Address":"",
            "Street":"",
            "Number":0,
            "Pin-Code":0
        },
        curname:'',
        buyprods:[],
        total:0,
        fills:true
    }
    componentDidMount()
    {
        let quer = new URLSearchParams(this.props.location.search)
        if(quer.get("Lined Register")>0){this.state.buyprods.push({"Lined register":quer.get("Lined Register")})}
        if(quer.get("Pen")>0){this.state.buyprods.push({"Pen":quer.get("Pen")})}
        if(quer.get("Pencil")>0){this.state.buyprods.push({"Pencil":quer.get("Pencil")})}
        if(quer.get("Plane Register")>0){this.state.buyprods.push({"Plane Register":quer.get("Plane Register")})}
        if(quer.get("Small NoteBook")>0){this.state.buyprods.push({"Small NoteBook":quer.get("Small NoteBook")})}
        this.setState({total:quer.get("totalCost"),curname:quer.get("name")})
    }
    formval = (event) => {
        let upd = {...this.state.cred}
        upd[event.target.id] = event.target.value
        this.setState({cred:upd})
    }

    submitfinal = (event) => {
        event.preventDefault()
        let upd = {...this.state.cred}
        if(upd["Address"]==="" || upd["Street"]==="" || upd["Number"]===0 || upd["Pin-Code"]===0)
        {
            this.setState({fills:false})
            this.props.history.push({
                pathname:"/check",
                search: this.props.location.search
            })
        }
        else
        {
            const orders = {
                name:this.state.curname,
                products:this.state.buyprods,
                address:upd["Address"],
                street:upd["Street"],
                phone_number:upd["Number"],
                pincode:upd["Pin-Code"],
                totalCost:this.state.total
            }
            let query = new URLSearchParams(this.props.location.search)
            let email = `?name=${query.get("email")}`
            axios.post("https://stationary-shop-cdb45.firebaseio.com/Orders.json",orders).then((response) => {
                this.props.history.push({
                    pathname:"/main",
                    search:email
                })
                this.setState({fills:true})
            }).catch((e) => {
                this.setState({fills:false})
            })
        }
    }

    render(){
        let quer = new URLSearchParams(this.props.location.search)
        const total = quer.get("totalCost")
        const lined = quer.get("Lined Register")>0?<div class="p-2 bd-highlight"><em className="display-4">Lined register:{quer.get("Lined Register")}</em></div>:null
        const pen = quer.get("Pen")>0?<div class="p-2 bd-highlight"><em className="display-4">Pen:{quer.get("Pen")}</em></div>:null
        const pencil = quer.get("Pencil")>0?<div class="p-2 bd-highlight"><em className="display-4">Pencil:{quer.get("Pencil")}</em></div>:null
        const plane = quer.get("Plane Register")>0?<div class="p-2 bd-highlight"><em className="display-4">Plane Register:{quer.get("Plane Register")}</em></div>:null
        const small = quer.get("Small NoteBook")>0?<div class="p-2 bd-highlight"><em className="display-4">Small NoteBook:{quer.get("Small NoteBook")}</em></div>:null
        let ale = null
        if(!this.state.fills)
        {
            ale = (<div class="alert alert-danger" role="alert">
                   Error!Please fill all the details.
                    </div>)
        }
        return(
            <Aux>
                {ale}
            <div class="pl-3 bd-highlight mb-5"><h1 className="display-3">Here is Your ORDER </h1></div>
                <div class="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center">
                    {lined}
                    {pen}
                    {pencil}
                    {plane}
                    {small}
                </div>
                <div className="p-2 bd-highlight"><h2 className="display-4">Total Cost:Rs.{total}</h2></div>
                <div className="p-2 bd-highlight"><h1 className="display-3">Please give your address below</h1></div>
                <Form formval={(event) => this.formval(event)} submit={(event) => this.submitfinal(event)}/>
            </Aux>
        )
    }
}

export default CheckOut