import React, { Component } from 'react'
import './style.less'

export default class index extends Component {
  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
