import React from 'react'
import { getStories } from '../utils/api'
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
    const items = await getStories(this.state.mode)
    this.setState({
      items: items,
      loading: false
    })
  }

  // async UNSAFE_componentWillReceiveProps () {

  // }

  render () {
    if (this.state.loading === true) {
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
