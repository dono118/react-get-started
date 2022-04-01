import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {
  search = () => {
    // 获取用户输入
    const {
      keywordElement: { value: keyword }
    } = this
    console.log(keyword)
    // 发送网络请求
    axios.get(`/api/search/users2?q=${keyword}`).then(
      res => {
        // 请求成功
        console.log('success==>', res.data)
      },
      err => {
        // 请求失败
        console.log('error==>', err)
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input
            ref={c => (this.keywordElement = c)}
            type="text"
            placeholder="enter the name you search"
          />
          &nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    )
  }
}
