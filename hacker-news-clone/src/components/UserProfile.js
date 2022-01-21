import React from 'react'
import { getUserProfile } from '../utils/api'
// import PostList from './PostList'

export default class UserProfile extends React.Component {
  state = {
    loading: true,
    user: null
  }

  async componentDidMount () {
    console.log(getUserProfile('aram'))
  }

  render () {
    return null
  }
}
