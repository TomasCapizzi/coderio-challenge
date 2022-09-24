import React from 'react'

function MenuLocationItem({item, getLocationTimezone, changeClassSearchBox}) {
  return (
    <p key={item} onClick={(e)=> getLocationTimezone(e, changeClassSearchBox)}>{
        item.includes('Argentina') || item.includes('Indiana') ? item.split('/')[2].toLowerCase()
        : 
        item.split('/')[1].toLowerCase()
        }
    </p>
  )
}

export default MenuLocationItem