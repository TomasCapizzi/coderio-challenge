import React from "react";
import useTimezones from "../Hooks/useTimezones";

export default function TimelineMenu(){


    const { filter,  handler,  changeSelect, getLocationTimezone,  getInputValue} = useTimezones()

    function changeClassSearchBox(){
        const searchBox = document.getElementById('search-box');

        if(searchBox.classList.contains('on')){
            searchBox.classList.remove('on');
        } else{
            searchBox.classList.add('on');
        }
    }

    return(

        <>
            <section className='menu'>
                <select name="timezone" id="timezone" onChange={changeSelect} className='menu-data'>
                    <option value="">Choose timezone...</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Atlantic">Atlantic</option>
                    <option value="Australia">Australia</option>
                    <option value="Europe">Europe</option>
                    <option value="Indian">Indian</option>
                    <option value="Pacific">Pacific</option>
                </select>
                <article className='search'>
                    <div className='input-container'>
                        <input type="text" placeholder='Search' id='input-search' onChange={getInputValue} />
                    </div>

                    <div className='drop-down-search' id='search-box'>
                        {
                            handler ?
                            <div className='drop-container'>
                                { filter.length ?
                                    filter.map( item =>
                                        <p key={item} onClick={(e)=> getLocationTimezone(e, changeClassSearchBox)}>{
                                            item.includes('Argentina') || item.includes('Indiana') ? item.split('/')[2].toLowerCase()
                                            : 
                                            item.split('/')[1].toLowerCase()
                                            }</p>
                                    ) : <p>No results</p>
                                }
                            </div>
                        :   <div className="sk-cube-grid">                                   
                                <div className="sk-cube sk-cube1"></div>
                                <div className="sk-cube sk-cube2"></div>
                                <div className="sk-cube sk-cube3"></div>
                                <div className="sk-cube sk-cube4"></div>
                                <div className="sk-cube sk-cube5"></div>
                                <div className="sk-cube sk-cube6"></div>
                                <div className="sk-cube sk-cube7"></div>
                                <div className="sk-cube sk-cube8"></div>
                                <div className="sk-cube sk-cube9"></div>
                            </div>
                        }
                    </div>
                </article>
            </section>
        </>
    )
}
