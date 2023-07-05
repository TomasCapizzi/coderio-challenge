import React from 'react'

interface Props {
  item: string
  getLocationTimezone: (e:React.MouseEvent<HTMLParagraphElement>, changeClassSearchBox: ()=> void) => void
  changeClassSearchBox:() => void
}

function MenuLocationItem({item, getLocationTimezone, changeClassSearchBox}: Props) {
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