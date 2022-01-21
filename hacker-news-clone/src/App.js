import UserProfile from './components/UserProfile'
// import PostList from './components/PostList'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
function App () {
  return (
    <Router>
      <div className="App">
        <UserProfile/>
      </div>
    </Router>
  )
}

export default App
