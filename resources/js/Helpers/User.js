import Token from './Token'
import AppStorage from './AppStorage'

class User {
  login (data) {
    axios.post('/api/auth/login', data)
      .then(res => {
          this.responseAfterLogin(res)
          //When the User login, push to router
           this.$router.push({name:'forum'})
        })
      .catch(error => console.log(error.response.data))
  }

  responseAfterLogin (res) {
    const accessToken = res.data.access_token
    const username = res.data.user
    if (Token.isValid(accessToken)) {
      AppStorage.store(username, accessToken)
      window.location = '/forum'
    }
  }

  hasToken () {
    const storedToken = AppStorage.getToken()
    if (storedToken) {
      return Token.isValid(storedToken) ? true : this.logout()
    }
    return false
  }

  loggedIn () {
    return this.hasToken()
  }

  logout () {
    AppStorage.clear()
    window.location = '/forum'
  }

  name () {
    if (this.loggedIn()) {
      AppStorage.getUser()
    }
  }

  id () {
    if (this.loggedIn()) {
      const payload = Token.payload(AppStorage.getToken())
      return payload.sub
    }
  }

  own (id) {
    return this.id() === id
  }

  admin () {
    return this.id() === 20
  }
}


export default User = new User();
