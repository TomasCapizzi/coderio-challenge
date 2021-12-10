import React,{useContext} from "react";
import {MdCancel} from 'react-icons/md'
import { SelectionsContext } from "../Context/SelectionsContext";

export default function Timezone(){


    const {selections, setSelections} = useContext(SelectionsContext);


    function removeTimezone(timezone){

        setSelections(selections.filter(item => item.timezone !== timezone))
    }

    return(
        <article className='timezone'>
            { selections.length?
                selections.map(
                    item => 
                    {
                     const date = item.datetime.split('T')[0]
                     const time = item.datetime.split('T')[1]   
                     return <div key={item.timezone}  className='zone'>
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
                    }
                )
                :
                    <div className='intro'>
                        <h3>Timezones App</h3>
                        <p>Choose between the timezones you want to see. Filter by regions and names!</p>
                    </div>
            }
        </article>
    )
}