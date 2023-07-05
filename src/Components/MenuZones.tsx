import React from 'react'

interface Props {
  changeSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

function MenuZones({changeSelect}: Props) {
  return (
    <select name="timezone" id="timezone" onChange={(e)=> changeSelect(e)} className='menu-data'>
        <option value="">Choose timezone...</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Atlantic">Atlantic</option>
        <option value="Australia">Australia</option>
        <option value="Europe">Europe</option>
        <option value="Indian">Indian</option>
        <option value="Pacific">Pacific</option>
    </select>
  )
}

export default MenuZones