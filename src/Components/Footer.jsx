import React from "react";
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'

export default function Footer(){

    return(
        <div className='footer'>
            <p>This app was made using <span><a href="http://worldtimeapi.org/" rel='no-referrer' target='_blank'>worldtimeapi</a></span> by Tomas Capizzi</p>
            <a href="https://www.linkedin.com/in/tomas-capizzi/" rel='no-referrer' target='_blank'><AiFillLinkedin/></a>
            <a href="https://github.com/TomasCapizzi" rel='no-referrer' target='_blank'><AiFillGithub/></a>
        </div>
    )
}
