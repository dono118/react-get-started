import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './style.less'

class TodoList extends Component {
  state = {
    todos: [
      {
        id: '001',
        name: '吃饭',
        done: true
      },
      {
        id: '002',
        name: '睡觉',
        done: true
      },
      {
        id: '003',
        name: '敲代码',
        done: false
      },
      {
        id: '004',
        name: '逛街',
        done: false
      }
    ]
  }
  render() {
    const { todos } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <h2>TodoList案例</h2>
          <Header />
          <List todos={todos} />
          <Footer />
        </div>
      </div>
    )
  }
}
export default TodoList
