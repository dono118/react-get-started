import React, { Component } from 'react'
import './style.less'

export default class index extends Component {
  state = {
    mouse: false
  }
  // 处理鼠标的移入移出事件
  handleMouse = flag => {
    return () => {
      this.setState({
        mouse: flag
      })
    }
  }

  // 更新todo状态
  handleCheck = id => {
    return event => {
      this.props.updateTodo(id, event.target.checked)
    }
  }

  render() {
    const { id, name, done } = this.props
    const { mouse } = this.state
    return (
      <li
        onMouseEnter={this.handleMouse(true)}
        onMouseLeave={this.handleMouse(false)}
        style={{ backgroundColor: mouse ? '#ddd' : '#fff' }}
      >
        <label>
          <input
            type="checkbox"
            defaultChecked={done}
            onChange={this.handleCheck(id)}
          />
          <span>{name}</span>
        </label>
        <button
          className="btn btn-danger"
          style={{ display: mouse ? 'block' : 'none' }}
        >
          删除
        </button>
      </li>
    )
  }
}
