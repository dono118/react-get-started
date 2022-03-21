import React, { Component } from 'react'
import Header from './Header'
import List from './List'
import Footer from './Footer'
import './style.less'

class TodoList extends Component {
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <h2>TodoList案例</h2>
          <Header />
          <List />
          <Footer />
        </div>
      </div>
    )
  }
}
export default TodoList
