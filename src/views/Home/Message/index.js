import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
  state = {
    msgArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' }
    ]
  }

  // 编程式路由导航
  handleReplaceShow = id => {
    this.props.history.replace(`/home/message/detail/${id}`)
  }

  // 回退
  back = () => {
    this.props.history.goBack()
  }

  // 前进
  forward = () => {
    this.props.history.goForward()
  }

  // 1 前进一步 -1 后退一步
  go = () => {
    this.props.history.go(-1)
  }

  render() {
    const { msgArr } = this.state
    return (
      <div>
        <ul>
          {msgArr.map(item => {
            return (
              <li key={item.id}>
                {/* 向路由组件传递params参数 */}
                <Link to={`/home/message/detail/${item.id}`}>{item.title}</Link>
                &nbsp;
                <button onClick={() => this.handleReplaceShow(item.id)}>
                  replace查看
                </button>
                {/* 向路由组件传递search参数 */}
                {/* <Link to={`/home/message/detail?id=${item.id}`}>
                  {item.title}
                </Link> */}
                {/* 向路由组件传递state参数 */}
                {/* <Link
                  replace
                  to={{
                    pathname: '/home/message/detail',
                    state: { id: item.id }
                  }}
                >
                  {item.title}
                </Link> */}
              </li>
            )
          })}
        </ul>
        <hr />
        {/* 声明接收params参数 */}
        <Route path="/home/message/detail/:id" component={Detail} />
        {/* search参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        {/* state参数无需声明接收 */}
        {/* <Route path="/home/message/detail" component={Detail} /> */}
        <button onClick={this.back}>回退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>Go</button>
      </div>
    )
  }
}
