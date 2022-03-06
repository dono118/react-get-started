import './App.css'
import Blog from '@/views/blog'

function App() {
  const posts = [
    { id: 1, title: 'Hello World', content: 'Welcome to learning React!' },
    { id: 2, title: 'Installation', content: 'You can install React from npm.' }
  ]
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Blog posts={posts} />
    </div>
  )
}

export default App
