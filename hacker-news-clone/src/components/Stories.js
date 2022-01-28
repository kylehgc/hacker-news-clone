import React from 'react'
import { getStories } from '../utils/api'
import PropTypes from 'prop-types'
import Loading from './Loading'
import PostList from './PostList'

export default class Stories extends React.Component {
  state = {
    loading: true,
    items: null,
    mode: this.props.mode,
    error: null
  }

  async componentDidMount () {
    try {
      const items = await getStories(this.state.mode)

      this.setState({
        items: items,
        loading: false
      })
    } catch (error) {
      this.setState({
        error: error.message
      })
    }
  }

  // async UNSAFE_componentWillReceiveProps () {

  // }

  render () {
    const { loading, error } = this.state
    if (error != null) {
      return (
        <p> Cannot load stories </p>
      )
    }
    if (loading === true) {
      return <Loading text='Loading'/>
    }

    return (
      <PostList items={this.state.items}/>
    )
  }
}

Stories.propTypes = {
  mode: PropTypes.string.isRequired
}
