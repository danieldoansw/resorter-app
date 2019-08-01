import React, { Component } from 'react'
import { register } from './UserFunctions'

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // onChange(e) {
        //     this.setState({ [e.target.name]: e.target.value })
        // }

        // onSubmit(e) {
        //     console.log("Pressed !")
        //     e.preventDefault()

        //     const newUser = {
        //         first_name: this.state.first_name,
        //         last_name: this.state.last_name,
        //         email: this.state.email,
        //         password: this.state.password
        //     }

        //     console.log("newUser", newUser)
        //     register(newUser).then(res => {
        //         this.props.history.push(`/login`)
        //     })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit(event) {
        console.log("Pressed !")
        event.preventDefault()

        const newUser = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password
        }

        console.log("newUser", newUser)
        register(newUser).then(res => {
            this.props.history.push(`/login`)
        })
    }

    render() {
        return (
            <div className="container">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={this.handleSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>

                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="first_name"
                                placeholder="Enter your first name"
                                value={this.state.first_name}
                                onChange={this.handleChange}
                            ></input>
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">Last Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="last_name"
                                placeholder="Enter your last name"
                                value={this.state.last_name}
                                onChange={this.handleChange}
                            ></input>
                        </div>
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
                            Register
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register