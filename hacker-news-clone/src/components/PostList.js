import React from 'react'
import { getTopStories } from '../utils/api'
import PropTypes from 'prop-types'
import Loading from './Loading'
import Post from './Post'
export default class PostList extends React.Component {
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
      console.log(items)
    }
  }

  render () {
    if (this.state.loading === true) {
      return <Loading text='Loading'/>
    }

    const { items } = this.state
    return (
      <React.Fragment>
        <ul>
          {items.map(({
            by: userName,
            id, title,
            kids: comments,
            url,
            time
          }) =>
            <li key = {id}>
              <Post id={id}
                title={title}
                numComments={comments ? comments.length : null}
                url={url}
                userName={userName}
                time={time} />
            </li>)}
        </ul>
      </React.Fragment>
    )
  }
}

PostList.propTypes = {
  mode: PropTypes.string.isRequired
}
