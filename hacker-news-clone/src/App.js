// import UserProfile from './components/UserProfile'
import Stories from './components/Stories'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
function App () {
  return (
    <Router>
      <div className="App">
        <Stories mode="top"></Stories>
      </div>
    </Router>
  )
}

export default App
