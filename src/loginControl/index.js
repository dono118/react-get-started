import React, { Component } from 'react'

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

function UserGreeting(props) {
  return <h2>{props.name}, welcome back!</h2>
}

function GuestGreeting(props) {
  return <h2>Please sign up.</h2>
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    const name = 'Alex'
    return <UserGreeting name={name} />
  }
  return <GuestGreeting />
}

class LoginControl extends Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    )
  }
}

export default LoginControl
