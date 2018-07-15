import React, { Component } from 'react';
import { HTTP } from '../../utils';

class Auth extends Component {
    constructor() {
        super()
        this.state = {
            vistor: {
                username: "",
                password: ""
            }
        }
    }

    updateVisitor(attr, event) {
        console.log(attr + ' == ' + event.target.value)
        let updatedVisitor = Object.assign({}, this.state.vistor)
        updatedVisitor[attr] = event.target.value
        
        this.setState({
            vistor: updatedVisitor
        })
    }

    register(event) {
        event.preventDefault()
        console.log('REGISTER: ' + JSON.stringify(this.state.vistor))
        HTTP.post('/auth/register', this.state.vistor)
        .then(data => {
            console.log('RESPONSE: ' + JSON.stringify(data))
        })
        .catch(err => {
            console.log('ERROR: ' + err.message)
        })
    }

    login(event) {
        event.preventDefault()
        console.log('LOGIN: ' + JSON.stringify(this.state.vistor))
        HTTP.post('/auth/login', this.state.vistor)
        .then(data => {
            console.log('RESPONSE: ' + JSON.stringify(data))
        })
        .catch(err => {
            console.log('ERROR: ' + err.message)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Register</h1>
                        <form>
                            <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="Username" /><br />
                            <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="passworld" placeholder="Password" /><br />
                            <button onClick={this.register.bind(this)}>Join</button>
                        </form>

                        <hr />

                        <h1>Login</h1>
                        <form>
                            <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="Username" /><br />
                            <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="passworld" placeholder="Password" /><br />
                            <button onClick={this.login.bind(this)}>Login</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Auth;