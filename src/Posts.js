import React from 'react'

const Posts = ({ setPostfix }) => {
  return (
    <button
      type='button'
      onClick={() => setPostfix('posts')}
    >
      Posts
    </button>
  )
}

export default Posts