import React from 'react'

const Users = ({ setPostfix }) => {
  return (
    <button
      type='button'
      onClick={() => setPostfix('users')}
    >
      Users
    </button>
  )
}

export default Users