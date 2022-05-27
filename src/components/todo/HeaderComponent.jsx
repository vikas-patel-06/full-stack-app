import React, { Component } from 'react'
import AuthenticateUserService from './AuthenticateUserService.js'
import { Link } from 'react-router-dom'

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

export default HeaderComponent
