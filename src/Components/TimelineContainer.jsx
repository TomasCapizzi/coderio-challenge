import React from "react";
import Timezone from "./Timezone";
import TimelineMenu from "./TimelineMenu";

export default function TimelineContainer(){

    //const [selections, setSelections] = useState([]);

    return(
        <div className='timeline-container'>
            <TimelineMenu />
            <div className='user-timezones'>
                <Timezone />
            </div>
        </div>
    )
}