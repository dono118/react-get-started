import React, { Component } from 'react'
import './style.less'

export default class index extends Component {
  render() {
    return (
      <li>
        <label>
          <input type="checkbox" />
          <span>xxx</span>
        </label>
        <button className="btn btn-danger" style={{ display: 'none' }}>
          删除
        </button>
      </li>
    )
  }
}
