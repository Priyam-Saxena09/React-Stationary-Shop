import React, { Component } from "react"
import Products from "../Products/Products"
import Controls from "../Controls/Controls"
import Aux from "../Auxillary/Auxillary"
import Navbar from "../Navbar/Navbar"
import axios from "../axios"
import fire from "../Firebase/firebase"

class Main extends Component{

    state = {
        products:null,
        costs:
        {
            "Small NoteBook":35,
            "Lined Register":60,
            "Plane Register":75,
            "Pen":20,
            "Pencil":10
        },
        totalCost:0,
        stat:[false,false,false,false,false],
        order:false,
        show:false,
        add:false,
        currentlogin:'',
        curemail:''
    }

    componentDidMount()
    {
        let query = new URLSearchParams(this.props.location.search)
        let email = query.get("name")
        let name = query.get("name").split("@")[0]
        this.setState({currentlogin:name,curemail:email})
        axios.get("/Products.json").then(response => {
            this.setState({products:response.data,show:true,add:true})
        }).catch(er => {
            this.setState({show:false,add:false})
        })
    }

    prodAdd = (type) => {
        let upd = {...this.state.products}
        upd[type]+=1
        let st = [...this.state.stat]
        let i=0
        for(let key in this.state.products)
        {
            if(key===type)
            {
                break;
            }
            i++;
        }
        st[i] = true
        let allco = {...this.state.costs}
        let cost = this.state.totalCost
        cost+=allco[type]
        this.setState({products:upd,stat:st,order:true,totalCost:cost})
    }

    removeAdd = (type) => {
        let upd = {...this.state.products}
        upd[type]-=1
        let allco = {...this.state.costs}
        let cost = this.state.totalCost
        cost-=allco[type]
        if(upd[type]===0)
        {
            let st = [...this.state.stat]
            let i=0
            for(let key in this.state.products)
            {
                if(key===type)
                {
                    break;
                }
                i++;
            }
            st[i] = false
            if(JSON.stringify(st)==="[false,false,false,false,false]")
            {
                this.setState({products:upd,stat:st,order:false,totalCost:cost})
            }
            else
            {
                this.setState({products:upd,stat:st,totalCost:cost})
            }
        }
        else
        {
            this.setState({products:upd,totalCost:cost})
        }
        
    }

    check = () => {
        let quer = [`totalCost=${this.state.totalCost}`]
        for(let key in this.state.products)
        {
            quer.push(`${key}=${this.state.products[key]}`)
        }
        quer.push(`name=${this.state.currentlogin}`)
        quer.push(`email=${this.state.curemail}`)
        let query = quer.join("&")
        this.props.history.push({
            pathname:"/check",
            search:query
        })           
    }
    
    onLogOut = () => {
        fire.auth().signOut();
        this.props.history.push("/")
    }
    render(){
        let prod = <div class="spinner-border text-info" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        if(this.state.show)
        {
          prod = []
          for(let key in this.state.products)
          {
            prod.push(<Products key={key} product={key} amount={this.state.products[key]}/>)
          }
        }
        return(
        <Aux>
            <Navbar logout = {() => this.onLogOut()} name={this.state.currentlogin}/>
            <div class="d-flex flex-column bd-highlight mb-3 justify-content-center align-items-center mt-5">
               {prod}
            </div>
            <Controls add={this.prodAdd} rem={this.removeAdd} addstat={this.state.add} stat={this.state.stat} order={this.state.order} total={this.state.totalCost} 
            products={this.state.products} check={this.check}/>
        </Aux>    
        )
    }
}

export default Main