// import Post from './components/Post'
import PostList from './components/PostList'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
function App () {
  return (
    <Router>
      <div className="App">
        <PostList mode="top"/>
      </div>
    </Router>
  )
}

export default App
