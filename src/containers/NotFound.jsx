import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>Not Found</h1>
      <button>
        <Link to="/">Go Home</Link>
      </button>
    </React.Fragment>
  )
}

export default NotFound