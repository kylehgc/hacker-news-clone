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
    story: null
  }

  async componentDidMount () {
    const { id: storyID } = queryString.parse(this.props.location.search)
    const { story, comments } = await getCommentList(storyID)
    this.setState({
      story: story,
      comments: comments,
      loading: false
    })
  }

  render () {
    if (this.state.loading === true) {
      return <Loading />
    }
    const { story, comments } = this.state
    return (
      <React.Fragment>
        <Post id={story.id}
          title={story.title}
          numComments={story.descendants ? story.descendants : null}
          url={story.url}
          userName={story.by}
          time={story.time} />
        <CommentList comments={comments} />
      </React.Fragment>
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
