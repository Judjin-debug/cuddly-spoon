import React from 'react'
import OutputItem from './OutputItem'

const Output = ({ items }) => {
  return (
    <table className='Output'>
      <tbody>
        {items.map((item) => (
          <OutputItem
            key={item.id}
            item={item}
          />
        ))}
      </tbody>
    </table>
  )
}

export default Output