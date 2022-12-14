import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrMsg: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitDetails = event => {
    event.preventDefault()
    const loginDetails = localStorage.getItem('loginDetails')
    const parsedDetails = JSON.parse(loginDetails)
    const {username, password} = this.state
    if (
      username === parsedDetails.userId &&
      password === parsedDetails.userPassword
    ) {
      const {history} = this.props
      history.replace('/home')
    } else {
      this.setState({showErrMsg: true})
    }
  }

  onClickForgetPassword = () => {
    localStorage.removeItem('loginDetails')
    return <Redirect to="/" />
  }

  render() {
    const {username, password, showErrMsg} = this.state
    const loginDetails = localStorage.getItem('loginDetails')
    if (loginDetails === null) {
      return <Redirect to="/" />
    }
    return (
      <>
        <div className="bg-container">
          <h1 className="heading">LogIn to your Account</h1>
          <form
            className="login-form-container"
            onSubmit={this.onSubmitDetails}
          >
            <div className="input-container">
              <label className="label-element" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                className="input-element"
                id="username"
                onChange={this.onChangeUsername}
                value={username}
              />
            </div>
            <div className="input-container">
              <label className="label-element" htmlFor="password">
                PASSWORD
              </label>
              <input
                type="password"
                className="input-element"
                id="username"
                onChange={this.onChangePassword}
                value={password}
              />
            </div>
            <button type="submit" className="button">
              LOGIN
            </button>

            {showErrMsg && (
              <p className="error-msg" onClick={this.forgetPassword}>
                please enter valid credentials
              </p>
            )}
          </form>
          <div>
            <button
              className="forget-password"
              onClick={this.onClickForgetPassword}
            >
              Forget Password
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default LoginForm
