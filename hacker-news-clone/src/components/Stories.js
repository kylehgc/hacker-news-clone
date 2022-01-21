import React from 'react'
import { getTopStories } from '../utils/api'
import PropTypes from 'prop-types'
import Loading from './Loading'
import PostList from './PostList'

export default class Stories extends React.Component {
  state = {
    loading: true,
    items: null,
    mode: this.props.mode
  }

  async componentDidMount () {
    if (this.state.mode === 'top') {
      const items = await getTopStories()
      this.setState({
        items: items,
        loading: false
      })
    }
  }

  render () {
    if (this.state.loading === true) {
      return <Loading text='Loading'/>
    }
    // const { id, kids, by: userName, url, time, title } = this.state.items
    return (
      <PostList items={this.state.items}/>
    )
  }
}

Stories.propTypes = {
  mode: PropTypes.string.isRequired
}
