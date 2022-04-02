import React, { Component } from 'react'
import Item from '../Item'
import './style.less'

export default class List extends Component {
  render() {
    const { users } = this.props
    return (
      <div className="row">
        {users &&
          users.map(item => {
            return <Item key={item.id} {...item} />
          })}
      </div>
    )
  }
}
