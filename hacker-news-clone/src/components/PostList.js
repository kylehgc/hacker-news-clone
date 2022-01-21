
import Post from './Post'
import PropTypes from 'prop-types'

export default function PostList (props) {
  return (
    <ul>
      {props.items.map(({
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
  )
}

PostList.propTypes = {
  items: PropTypes.array.isRequired
}
