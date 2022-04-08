import { Link, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="page-header">
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 导航区-a标签改为Link标签 */}
            <Link className="list-group-item" to="/home">
              Home
            </Link>
            <Link className="list-group-item" to="/about">
              About
            </Link>
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
