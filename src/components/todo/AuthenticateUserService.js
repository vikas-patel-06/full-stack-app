class AuthenticateUserService {
  registerSuccessFull(username, password) {
    sessionStorage.setItem('authUser', username)
  }

  logout() {
    sessionStorage.removeItem('authUser')
  }

  isUserLoggedIn() {
    const isLoggedIn = sessionStorage.getItem('authUser')
    if (isLoggedIn === null) {
      return false
    }
    return true
  }
}

export default new AuthenticateUserService()
