import React from 'react'
import OutputElement from './OutputElement'
import {v4 as uuidv4} from 'uuid';


const OutputItem = ({ item }) => {
  return (
    <tr className='OutputItem'>
      {Object.values(item).map((el) => (
        <OutputElement
          key={uuidv4()}
          element={el}
        />
      ))}
    </tr>
  )
}

export default OutputItem