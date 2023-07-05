import React from 'react'

interface Props {
  getInputValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function MenuInput({getInputValue}: Props) {
  return (
    <div className='input-container'>
        <input type="text" placeholder='Search' id='input-search' onChange={getInputValue} />
    </div>
  )
}

export default MenuInput