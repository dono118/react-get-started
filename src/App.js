import { NavLink, Route } from 'react-router-dom'
import Header from './components/Header' // Header是一般组件
import Home from './views/Home' // Home是路由组件
import About from './views/About' // About是路由组件
import './App.css'

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 导航区-a标签改为NavLink标签 */}
            <NavLink
              activeClassName="nl-active"
              className="list-group-item"
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              activeClassName="nl-active"
              className="list-group-item"
              to="/about"
            >
              About
            </NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 展示区-Route标签进行路径的匹配 */}
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
