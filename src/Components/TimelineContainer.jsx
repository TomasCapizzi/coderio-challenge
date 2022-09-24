import React from "react";
import TimelineMenu from "./TimelineMenu";
import Timezone from "./Timezone";

export default function TimelineContainer(){
    return(
        <div className='timeline-container'>
            <TimelineMenu />
            <div className='user-timezones'>
                <Timezone />
            </div>
        </div>
    )
}