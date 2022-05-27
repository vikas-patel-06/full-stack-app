import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './TodoApp.css'
import '../../bootstrap.css'
import AuthenticateUserService from './AuthenticateUserService.js'

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          {/* <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/welcome/">Welcome</Link>
            </li>
          </ul> */}
          <Switch>
            <Route path={'/'} exact component={LoginComponent} />
            <Route path={'/login'} component={LoginComponent} />
            <Route path={'/welcome/:name'} component={WelcomeComponent} />
            <Route path={'/todos'} component={TodosComponent} />
            <Route path={'/logout'} component={LogoutComponent} />
            <Route component={ErrorComponent} />

            {/* <Route path="/" element={<LoginComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/welcome" element={<WelcomeComponent />} /> */}
          </Switch>
          <FooterComponent />
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    )
  }
}

class HeaderComponent extends Component {
  render() {
    const isLoggedInUser = AuthenticateUserService.isUserLoggedIn()
    console.log(isLoggedInUser)
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="navbar-brand">Vikas Patel</div>
            <ul className="navbar-nav ">
              {isLoggedInUser && (
                <li className="nav-link">
                  <Link to={'/'}>Home</Link>
                </li>
              )}
              {isLoggedInUser && (
                <li className="nav-link">
                  <Link to={'/todos'}>Todos</Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
              <li className="nav-link">
                {!isLoggedInUser && <Link to={'/login'}>Login</Link>}
              </li>
              {isLoggedInUser && (
                <li className="nav-link">
                  <Link to={'/logout'} onClick={AuthenticateUserService.logout}>
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}
class FooterComponent extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          All rights are reserved 1996 @VikasPatel
        </div>
      </footer>
    )
  }
}

class LogoutComponent extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <h1>Logout</h1>
          You have successfully logged out. Visit Again{' '}
        </div>
      </div>
    )
  }
}

class TodosComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { id: 1, description: 'Learn React', date: new Date(), done: false },
        {
          id: 2,
          description: 'Learn JPA',
          date: new Date(),
          done: false,
        },
        { id: 3, description: 'Learn Java', date: new Date(), done: false },
      ],
    }
  }
  render() {
    return (
      <div>
        <h1>List of Todos</h1>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>id</th>
                <th>description</th>
                <th>Target Date</th>
                <th>Is Complete?</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr>
                  <td>{todo.id}</td>
                  <td>{todo.description}</td>
                  <td>{todo.date.toLocaleDateString()}</td>
                  <td>{todo.done.toString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class WelcomeComponent extends Component {
  render() {
    return (
      <div className="container">
        <h1>Welcome!!</h1>
        Welcome {this.props.match.params.name}
        You can manage your todos <Link to="/todos">here</Link>.
      </div>
    )
  }
}
function ErrorComponent() {
  return (
    <div> Error Occurred !!! Please contact administarion department. </div>
  )
}

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

export default TodoApp
