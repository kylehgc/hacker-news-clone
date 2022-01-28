import React from 'react'
import Loading from './Loading'
import queryString from 'query-string'
import { getCommentList } from '../utils/api'
import PropTypes from 'prop-types'
import Post from './Post'
import Comment from './Comment'

export default class CommentPage extends React.Component {
  state = {
    loading: true,
    comments: null,
    story: null,
    error: null
  }

  async componentDidMount () {
    const { id: storyID } = queryString.parse(this.props.location.search)
    try {
      const { story, comments } = await getCommentList(storyID)
      this.setState({
        story: story,
        comments: comments,
        loading: false
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
    const { story, comments } = this.state
    return (
      <div className='test'>
        <Post id={story.id}
          title={story.title}
          numComments={story.descendants ? story.descendants : null}
          url={story.url}
          userName={story.by}
          time={story.time} />
        {comments && <CommentList comments={comments} />}
      </div>
    )
  }
}

const CommentList = ({ comments }) => (
  <ul className='comment-list'>
    {comments.map(({ text: commentBody, time, by: userName, id }) => (
      <li key ={id} className='comment'>
        <Comment commentBody={commentBody} time={time} userName={userName} id={id} />
      </li>
    ))}
  </ul>
)
CommentPage.propTypes = {
  location: PropTypes.object
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}
