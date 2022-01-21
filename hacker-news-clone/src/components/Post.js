import PostTitle from './PostTitle'
import PostUser from './PostUser'
import PropTypes from 'prop-types'

const Post = ({ id, numComments, title, url, userName, time }) => {
  return (
    <div>
      <PostTitle title={title} url={url}/>
      <PostUser
        userName={userName}
        time={time}
        id={id}
        numComments={numComments}/>
    </div>
  )
}
Post.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  numComments: PropTypes.number,
  id: PropTypes.number.isRequired
}
export default Post
