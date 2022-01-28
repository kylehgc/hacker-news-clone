import React from 'react'
import sanitizeHtml from 'sanitize-html'
import PostUser from './PostUser'
import PropTypes from 'prop-types'

const Comment = ({ commentBody, time, userName }) => (
  <React.Fragment>
    <PostUser time={time} userName={userName}/>
    <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(commentBody) }} />
  </React.Fragment>

)

export default Comment

Comment.propTypes = {
  commentBody: PropTypes.node.isRequired,
  time: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired
}
