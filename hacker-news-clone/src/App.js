// import UserProfile from './components/UserProfile'
// import Stories from './components/Stories'
import Loading from './components/Loading'
import React from 'react'
import PropTypes from 'prop-types'
// import UserProfile from './components/UserProfile'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Stories = React.lazy(() => import('./components/Stories'))
const UserProfile = React.lazy(() => import('./components/UserProfile'))
const CommentPage = React.lazy(() => import('./components/CommentPage'))

function App () {
  return (
    <Router>
      <div className="App">
        <React.Suspense fallback = {<Loading />} >
          <Switch>
            <Route exact path='/' render={() => <Stories mode='top'/>} />
            <Route exact path='/new' render={() => <Stories mode='new'/>} />
            <Route path='/post' component={CommentPage} />
            <Route path='/user' component={UserProfile} />
            <Route render={() => <h1>404</h1>}/>
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  )
}
Route.propTypes = {
  ...Route.propTypes,
  component: PropTypes.object
}
export default App
