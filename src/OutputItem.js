import React from 'react'

const OutputItem = ({ item }) => {
  return (
    <li className='OutputItem'>
      {JSON.stringify(item)}
    </li>
  )
}

export default OutputItem