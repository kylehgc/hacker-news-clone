import Post from './components/Post'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
function App () {
  return (
    <Router>
      <div className="App">
        <Post url="https://www.google.com" title ="this is the title" userName="foo" time="2932973" numComments={4} id={322}/>
      </div>
    </Router>
  )
}

export default App
