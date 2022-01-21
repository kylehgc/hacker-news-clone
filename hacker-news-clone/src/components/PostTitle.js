
import PropTypes from 'prop-types'

const PostTitle = ({ title, url }) => (
  <a href={url}>{title}</a>
)

export default PostTitle

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
