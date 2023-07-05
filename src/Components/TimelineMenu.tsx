import React,{useRef} from "react";

import MenuInput from './MenuInput';
import MenuLocationItem from './MenuLocationItem';
import MenuZones from "./MenuZones";
import Spinner from './Spinner';
import useTimezones from "../Hooks/useTimezones";

export default function TimelineMenu(){

    const searchBoxRef = useRef<HTMLDivElement>(null);
    const { filter,  handler,  changeSelect, getLocationTimezone,  getInputValue} = useTimezones({searchBoxRef});


    function changeClassSearchBox(){
        if(searchBoxRef.current){
            if(searchBoxRef.current.classList.contains('on')){
                searchBoxRef.current.classList.remove('on');
            } else{
                searchBoxRef.current.classList.add('on');
            }
        }
    }

    return( 
        <>
            <section className='menu'>
                <MenuZones changeSelect={changeSelect} />
                <article className='search'>
                    <MenuInput getInputValue={getInputValue} />
                    <div className='drop-down-search' ref={searchBoxRef}>
                        {
                            handler ?
                                <div className='drop-container'>
                                    { filter.length ?
                                        filter.map( item =>
                                            <MenuLocationItem item={item} getLocationTimezone={getLocationTimezone} changeClassSearchBox={changeClassSearchBox} />
                                        ) : <p>No results</p>
                                    }
                                </div>
                        :   <Spinner/>
                        }
                    </div>
                </article>
            </section>
        </>
    )
}
