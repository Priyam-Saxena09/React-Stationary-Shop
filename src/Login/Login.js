import React, { Component } from "react"
import fire from "../Firebase/firebase"
import "./Login.css"
import Aux from "../Auxillary/Auxillary"

class Login extends Component{
    state = {
        creden:{
            "email":'',
            "password":''
        },
        ale:false,
        mess:''
    }


    Login = (event) => {
        event.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.creden.email,this.state.creden.password).then((u) => {
            this.setState({ale:false,mess:''})
            let name = `name=${this.state.creden.email}`
            this.props.history.push({
                pathname:"/main",
                search:"?" + name
            })
        }).catch((e) => {
            this.setState({ale:true,mess:e.message})
        })
    }
    switchSign = () => {
        this.props.history.push("/signUp")
    }

    authHandler = (event) => {
        let upd = {...this.state.creden}
        upd[event.target.id] = event.target.value
        this.setState({creden:upd})
    }

    render(){
        let mes = new URLSearchParams(this.props.location.search).get("message")
        let message = null
        if(mes)
        {
          message = <div class="alert alert-success" role="alert">
                        {mes}
                    </div>
        }
        if(this.state.ale)
        {
            message = <div class="alert alert-danger" role="alert">
                        {this.state.mess}
                    </div>
        }
        return(
            <Aux>
                {message}
            <form className="container mt-5 cont">
                <h1 className="mb-5 display-2">Log In</h1>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(event) => this.authHandler(event)}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" onChange={(event) => this.authHandler(event)}/>
                </div>
                <button type="submit" class="btn btn-primary mb-4" onClick={(event) => this.Login(event)}>Login</button>
                <div className="mt-4">
                <b className="mr-3">Want to Create an Account?</b><button type="submit" class="btn btn-primary mb-3" onClick={() => this.switchSign()}>SignUp</button>
                </div>
            </form>
            </Aux>
        )
    }
}

export default Login