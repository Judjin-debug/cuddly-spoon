import React from 'react'
import OutputItem from './OutputItem'

const Output = ({ items }) => {
  return (
    <ul className='Output'>
      {items.map((item) => (
        <OutputItem
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  )
}

export default Output