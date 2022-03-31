import React, { Component } from 'react'
import Search from './Search'
import List from './List'

export default class SearchDemo extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <List />
      </div>
    )
  }
}
