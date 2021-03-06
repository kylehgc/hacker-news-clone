import React from 'react'
import Loading from './Loading'
import { getUserProfile } from '../utils/api'
import PostList from './PostList'
import PropTypes from 'prop-types'
import { getFormattedTime } from './PostUser'
import queryString from 'query-string'
import sanitizeHtml from 'sanitize-html'

export default class UserProfile extends React.Component {
  state = {
    loading: true,
    user: null,
    items: null,
    error: null
  }

  async componentDidMount () {
    const { id: user } = queryString.parse(this.props.location.search)
    try {
      const userProfile = await getUserProfile(user)
      this.setState({
        loading: false,
        user: userProfile.user,
        items: userProfile.submissions
      })
    } catch (error) {
      this.setState({
        error: error.message
      })
    }
  }

  render () {
    const { loading, error } = this.state
    if (error != null) {
      return (
        <p> Cant find user! </p>
      )
    }
    if (loading === true) {
      return <Loading text='Loading' />
    }
    const { karma, created: time, id: userName, about } = this.state.user
    return (
      <div>
        <User karma={karma} time={time} userName={userName} />
        {about && <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(about) }} />}

        <h1>POSTS</h1>
        <PostList items={this.state.items} />
      </div>
    )
  }
}

UserProfile.propTypes = {
  location: PropTypes.object.isRequired
}

function User ({ karma, time, userName }) {
  return (
    <React.Fragment>
      <h1>{userName}</h1>
      <h3>joined {getFormattedTime(time)} has {karma.toLocaleString()} Karma</h3>
    </React.Fragment>
  )
}

User.propTypes = {
  karma: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
}
