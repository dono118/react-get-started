import React, { Component } from 'react'
import Item from '../Item'
import './style.less'

export default class index extends Component {
  render() {
    return (
      <ul className="todo-main">
        <Item />
        <Item />
      </ul>
    )
  }
}
