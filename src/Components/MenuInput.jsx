import React from 'react'

function MenuInput({getInputValue}) {
  return (
    <div className='input-container'>
        <input type="text" placeholder='Search' id='input-search' onChange={getInputValue} />
    </div>
  )
}

export default MenuInput