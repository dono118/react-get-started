import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <div className="card">
        <a href="https://github.com/reactjs" rel="noreferrer" target="_blank">
          <img
            src="https://avatars.githubusercontent.com/u/6412038?v=3"
            style={{ width: '100px' }}
            alt="avatar"
          />
          <p className="card-text">reactjs</p>
        </a>
      </div>
    )
  }
}
