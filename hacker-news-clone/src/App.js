// import PostUser from './components/PostUser'
import PostTitle from './components/PostTitle'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
function App () {
  return (
    <Router>
      <div className="App">
        <PostTitle url="https://www.google.com" title ="this is the title"/>
      </div>
    </Router>
  )
}

export default App
