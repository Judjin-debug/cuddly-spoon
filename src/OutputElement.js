import React from 'react'

const OutputElement = ({ element }) => {
  return (
    <td className='OutputElement'>
        {JSON.stringify(element)};
    </td>
  )
}

export default OutputElement