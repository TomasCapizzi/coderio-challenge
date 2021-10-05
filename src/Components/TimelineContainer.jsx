import React, {useState} from "react";
import Timezone from "./Timezone";
import TimelineMenu from "./TimelineMenu";

export default function TimelineContainer(){

    const [selections, setSelections] = useState([]);

    return(
        <div className='timeline-container'>
            <TimelineMenu setSelections={setSelections} selections={selections}/>
            <div className='user-timezones'>
                <Timezone selections={selections} setSelections={setSelections} />
            </div>
        </div>
    )
}