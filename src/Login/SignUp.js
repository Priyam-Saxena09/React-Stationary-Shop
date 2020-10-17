import React, { Component } from "react"
import fire from "../Firebase/firebase"
import Aux from "../Auxillary/Auxillary"

class SignUp extends Component{
    state = {
        creden:{
            email:"",
            password:""
        },
        ale:false,
        mess:''
    }


    SignUp = (event) => {
        event.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.creden.email,this.state.creden.password).then((u) => {
            this.setState({ale:false,mess:''})
            this.props.history.push({
                pathname:"/",
                search:"?message=You Have Successfully created an account"
            })
        }).catch((e) => {
            this.setState({ale:true,mess:e.message})
        })
    }

    switchLogin = () => {
        this.props.history.push("/")
    }

    authHandler = (event) => {
        let upd = {...this.state.creden}
        upd[event.target.id] = event.target.value
        this.setState({creden:upd})
    }

    render(){

        let message = null
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
                <h1 className="mb-5 display-2">Sign Up</h1>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp" onChange={(event) => this.authHandler(event)}/>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" onChange={(event) => this.authHandler(event)}/>
                </div>
                <button type="submit" class="btn btn-primary mb-4" onClick={(event) => this.SignUp(event)}>SignUp</button>
                <div className="mt-4">
                <b className="mr-3">Already have an account?</b><button type="submit" class="btn btn-primary mb-3" onClick={() => this.switchLogin()}>Login</button>
                </div>
            </form>
            </Aux>
        )
    }
}

export default SignUp