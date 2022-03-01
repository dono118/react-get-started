import './App.css'
import Comment from './comment'

function App() {
  const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64'
    }
  }
  return (
    <div className="App">
      <h1>Learn React</h1>
      <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
      />
    </div>
  )
}

export default App
