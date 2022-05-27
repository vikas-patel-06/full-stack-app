class AuthenticateUserService {
  registerSuccessFull(username, password) {
    sessionStorage.setItem('authUser', username)
  }

  logout() {
    sessionStorage.removeItem('authUser')
  }

  isUserLoggedIn() {
    if (sessionStorage.getItem('authUser') === null) return false
    return true
  }
}

export default new AuthenticateUserService()
