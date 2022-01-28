import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export function getFormattedTime (time) {
  return new Date(time * 1000).toLocaleString()
}
function NameLink ({ userName }) {
  return (
    <Link to={`/user?id=${userName}`}> {userName}</Link>
  )
}

function Comments ({ numComments, id }) {
  return (
    numComments != null
      ? <React.Fragment>
      with <Link to={`/post?id=${id}`}>{numComments}</Link> Comments
      </React.Fragment>
      : null
  )
}

export default function PostUser ({ userName, time, id, numComments }) {
  return (
    <div>
      by: <NameLink userName = {userName}/> on {getFormattedTime(time)}
      {' '}<Comments numComments={numComments} id={id}/>
    </div>
  )
}

NameLink.propTypes = {
  userName: PropTypes.string.isRequired
}
Comments.propTypes = {
  numComments: PropTypes.number,
  id: PropTypes.number
}

PostUser.propTypes = {
  userName: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  numComments: PropTypes.number,
  id: PropTypes.number
}
