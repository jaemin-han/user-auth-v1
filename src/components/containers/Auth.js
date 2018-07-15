import React, { Component } from 'react';
import { HTTP } from '../../utils';
import { connect } from 'react-redux';
import actions from '../../actions';

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
            // Current user
            const user = data.user
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
            const user = data.user
            this.props.currentUserReceived(user)
        })
        .catch(err => {
            console.log('ERROR: ' + err.message)
        })
    }

    render() {
        const currentUser = this.props.user.currentUser // can be null


        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>Register</h1>
                        <form>
                            <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="Username" /><br />
                            <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="password" placeholder="Password" /><br />
                            <button onClick={this.register.bind(this)}>Join</button>
                        </form>

                        <hr />

                        <h1>Login</h1>
                        <form>
                            <input onChange={this.updateVisitor.bind(this, 'username')} className="form-control" type="text" placeholder="Username" /><br />
                            <input onChange={this.updateVisitor.bind(this, 'password')} className="form-control" type="password" placeholder="Password" /><br />
                            <button onClick={this.login.bind(this)}>Login</button>
                        </form>
                    </div>
                    <div className="col-md-6">
                    {/* conditional */}
                    {
                        (currentUser == null) ? null : (
                            <h1>Welcome {currentUser.username}</h1>
                        )
                    }
                    
                    </div>
                </div>
            </div>
        )
    }
}

// Make this component connect to the store (two functions)

// 1. Connect REDUCERS AND STORES
// Which reducer (userReducer)
// Store is already bind to the userReducer (reducer)
// User key from the store
const stateToProps = (state) => {
    return {
        user: state.user
    }
}

// 2. Connect ACTIONS
// Actions to this Component.
const dispatchToProps = (dispatch) => {
    return {
        currentUserReceived: (user) => dispatch(actions.currentUserReceived(user))
    }
}

// Connect the auth component to the redux store (#1) and actions for dispatch (#2)
// This component now receives two new properties
// 1. user 
// 2. currentUserReceived
export default connect(stateToProps, dispatchToProps)(Auth);