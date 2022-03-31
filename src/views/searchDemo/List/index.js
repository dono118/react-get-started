import React, { Component } from 'react'
import Item from '../Item'
import './style.less'

export default class List extends Component {
  render() {
    return (
      <div className="row">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    )
  }
}
