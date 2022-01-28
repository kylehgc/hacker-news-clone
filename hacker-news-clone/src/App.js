/* eslint-disable no-unused-vars */
// import UserProfile from './components/UserProfile'
// import Stories from './components/Stories'
import Loading from './components/Loading'
import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from './Contexts/Theme'
// import UserProfile from './components/UserProfile'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Nav from './components/Nav'
const Stories = React.lazy(() => import('./components/Stories'))
const UserProfile = React.lazy(() => import('./components/UserProfile'))
const CommentPage = React.lazy(() => import('./components/CommentPage'))

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }))
    }
  }

  render () {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback = {<Loading />} >
                <Switch>
                  <Route exact path='/' render={() => <Stories key='top' mode='top'/>} />
                  <Route exact path='/new' render={() => <Stories mode='new' key='new'/>} />
                  <Route path='/post' component={CommentPage} />
                  <Route path='/user' component={UserProfile} />
                  <Route render={() => <h1>404</h1>}/>
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    )
  }
}
Route.propTypes = {
  ...Route.propTypes,
  component: PropTypes.object
}
export default App
