import React,{useContext} from "react";

import Intro from "./Intro";
import { SelectionsContext } from "../Context/SelectionsContext";
import Zone from "./Zone";
import { TimezoneContext } from "../Types/Types";

export default function Timezone(){

    const {selections} = useContext(SelectionsContext) as TimezoneContext;

    return(
        <article className='timezone'>
            { selections.length?
                selections.map(
                    item => 
                    {
                     const date = item.datetime.split('T')[0]
                     const time = item.datetime.split('T')[1]   
                     return <Zone item={item} date={date} time={time} />
                    }
                )
                :
                <Intro/>
            }
        </article>
    )
}