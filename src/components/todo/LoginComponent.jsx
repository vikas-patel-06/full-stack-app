import React, { Component } from 'react'
import '../../bootstrap.css'
import AuthenticateUserService from './AuthenticateUserService.js'

class LoginComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'vikaspatel',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false,
    }
    // this.handleUsernameChange = this.handleUsernameChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  loginClicked() {
    if (
      this.state.username === 'vikaspatel' &&
      this.state.password === 'vikas'
    ) {
      console.log('succesful')
      AuthenticateUserService.registerSuccessFull(
        this.state.username,
        this.state.password
      )
      this.props.history.push(`/welcome/${this.state.username}`)
      // this.setState({
      //   showSuccessMessage: true,
      //   hasLoginFailed: false,
      // })
    } else {
      console.log('failed')
      this.setState({
        showSuccessMessage: false,
        hasLoginFailed: true,
      })
    }
  }
  // handleUsernameChange(event) {
  //   console.log(event.target.value)
  //   this.setState({
  //     username: event.target.value,
  //   })
  // }

  // handlePasswordChange(event){
  //   console.log(event.target.value)
  //   this.setState({password:event.target.value})
  // }

  render() {
    return (
      <div className="container">
        <h1>Login</h1>
        {this.state.hasLoginFailed && (
          <div className="alert alert-warning">Invalid Credentials</div>
        )}
        {/* {this.state.showSuccessMessage && <div>Login Sucessful</div>} */}
        Username:{' '}
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        Password:{' '}
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button className="btn btn-success" onClick={this.loginClicked}>
          Login
        </button>
      </div>
    )
  }
}

export default LoginComponent
