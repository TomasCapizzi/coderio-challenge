import React,{useContext} from 'react';

import {MdCancel} from 'react-icons/md';
import { SelectionsContext } from '../Context/SelectionsContext';
import { Timezone, TimezoneContext } from '../Types/Types';

interface Props {
  item: Timezone
  date: string
  time: string
}

function Zone({item, date, time}: Props) {
  
    const {selections, setSelections} = useContext(SelectionsContext) as TimezoneContext;

    function removeTimezone(timezone: string){
      setSelections(selections.filter(item => item.timezone !== timezone))
    }
  return (
    <div key={item.timezone}  className='zone'>
        <button><MdCancel onClick={ ()=> removeTimezone(item.timezone) }/></button>
        <h3>{item.timezone.split('/')[0]}</h3>
        {
            item.timezone.split('/')[1] === 'Argentina' ? <h3>{item.timezone.split('/')[2]}</h3>
            :
            <h3>{item.timezone.split('/')[1]}</h3>
        }
        <p>{date}</p>
        <p>{time.split(':')[0] + ' : ' +time.split(':')[1]}</p>
    </div>
  )
}

export default Zone