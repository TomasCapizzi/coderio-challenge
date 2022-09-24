import React,{useContext} from "react";

import Intro from "./Intro";
import { SelectionsContext } from "../Context/SelectionsContext";
import Zone from "./Zone";

export default function Timezone(){


    const {selections, setSelections} = useContext(SelectionsContext);

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