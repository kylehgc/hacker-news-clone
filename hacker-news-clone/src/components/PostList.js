import React from 'react'
import { getTopStories } from '../utils/api'
import PropTypes from 'prop-types'

export default class Posts extends React.Component {
  state = {
    loading: true,
    items: null,
    mode: this.props.mode
  }

  async componentDidMount () {
    if (this.state.mode === 'top') {
      this.setState = {
        items: await getTopStories
      }
    }
  }
}

Posts.propTypes = {
  mode: PropTypes.string.isRequired
}
