import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function getFormattedTime (time) {
  return new Date(time).toLocaleString()
}
function NameLink ({ name }) {
  return (
    <Link to={`/user?id=${name}`}> {name}</Link>
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

export default function PostUser ({ name, time, id, numComments }) {
  return (
    <h2>
      by: <NameLink name = {name}/> on {getFormattedTime(time)}
      {' '}<Comments numComments={numComments} id={id}/>

    </h2>
  )
}

NameLink.propTypes = {
  name: PropTypes.string.isRequired
}
Comments.propTypes = {
  numComments: PropTypes.number,
  id: PropTypes.number.isRequired
}

PostUser.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
  numComments: PropTypes.number,
  id: PropTypes.number.isRequired
}
