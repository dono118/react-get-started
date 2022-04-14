import { Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header' // Header是一般组件
import ENavLink from './components/ENavLink'
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
            <ENavLink to="/home">Home</ENavLink>
            <ENavLink to="/about">About</ENavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 展示区-Route标签进行路径的匹配 Swith可以提高路由的匹配效率(单一匹配)  Redirect 路由转发 */}
              <Switch>
                {/* exact 严格匹配，一般情况下不开启 只有需要时才开启 */}
                {/* <Route exact path="/home" component={Home} /> */}
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
                <Redirect to="/home" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
