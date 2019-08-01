import React, { Component } from 'react'
import { login } from './UserFunctions'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {

        console.log("Pressed !!!!");

        event.preventDefault()

        const newUser = {
            email: this.state.email,
            password: this.state.password
        }

        login(newUser).then(res => {
            this.props.history.push(`/profile`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                placeholder="Enter your password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            ></input>
                        </div>
                        <button type="submit" value="Submit" className="btn btn-lg btn-primary btn-block">
                            Sign in
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login