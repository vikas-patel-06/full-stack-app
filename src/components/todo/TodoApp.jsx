import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './TodoApp.css'
import '../../bootstrap.css'

import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'
import LogoutComponent from './LogoutComponent'
import TodosComponent from './TodosComponent'
import WelcomeComponent from './WelcomeComponent'
import ErrorComponent from './ErrorComponent'

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

export default TodoApp
