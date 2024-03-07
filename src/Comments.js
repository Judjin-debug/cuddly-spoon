import React from 'react'

const Comments = ({ setPostfix }) => {
  return (
    <button
      type='button'
      onClick={() => setPostfix('comments')}
    >
      Comments
    </button>
  )
}

export default Comments