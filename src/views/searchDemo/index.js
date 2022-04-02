import React, { Component } from 'react'
import Search from './Search'
import List from './List'

export default class SearchDemo extends Component {
  state = {
    users: []
  }

  // 保存
  saveUsers = users => {
    this.setState({
      users
    })
  }

  render() {
    const { users } = this.state
    return (
      <div className="container">
        <Search saveUsers={this.saveUsers} />
        <List users={users} />
      </div>
    )
  }
}
