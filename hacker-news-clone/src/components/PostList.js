
import Post from './Post'
import PropTypes from 'prop-types'

export default function PostList (props) {
  return (
    <ul>
      {props.items.map(({
        by: userName,
        id, title,
        descendants: comments,
        url,
        time
      }) =>
        <li key = {id}>
          <Post id={id}
            title={title}
            numComments={comments || 0 }
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
