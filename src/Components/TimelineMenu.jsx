import React,{useEffect, useState} from "react";

export default function TimelineMenu({setSelections, selections}){

    const totalTimezoneURL = "http://worldtimeapi.org/api/timezone/";
    const [timezones, setTimezones] = useState([]);
    const [filter, setFilter] = useState([]);
    const [zone, setZone] = useState('');
    const [handler, setHandler] = useState(false);


    async function fetchTimezone(e){
        const respuesta = await fetch(totalTimezoneURL + e.target.value)
        const res = await respuesta.json()
        setTimezones(res)
        setFilter(res)
        setHandler(true)
    }

    function changeSelect(e){
        setHandler(false);
        setZone(e.target.value);
        e.target.value !== '' ? fetchTimezone(e) : console.log('No hay value');
        //changeClassSearchBox();
        addOnClass();
    }

    function getLocationTimezone(e){
        console.log(e.target.innerText)
        changeClassSearchBox()
        createTimezone(e.target.innerText)
    }

    function changeClassSearchBox(){
        const searchBox = document.getElementById('search-box');

        if(searchBox.classList.contains('on')){
            searchBox.classList.remove('on');
        } else{
            searchBox.classList.add('on');
        }
    }

    function addOnClass(){
        const searchBox = document.getElementById('search-box');
        if(searchBox.classList.contains('on')){
           console.log('already has it')
        } else{
            searchBox.classList.add('on');
        }
    }


    function getInputValue(e){
       // changeClassSearchBox()
        e.target.value.length>=1  ? setFilter(filter.filter(item => item.toLowerCase().includes(e.target.value))) : setFilter(timezones)
    }

    async function createTimezone(place){
        const respuesta = await fetch(totalTimezoneURL + zone + '/' + place[0].toUpperCase() + place.slice(1));
        const res = await respuesta.json();
        console.log(res)
        setSelections([...selections,res])
    }

    useEffect(()=>{

    },[])


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
                                        <p key={item} onClick={getLocationTimezone}>{
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


/*
                            {
                                handler ?
                                    {
                                        timezones.map(item => {
                                            <p key={item}>{item}</p>
                                        })
                                    }
                                :
                                    <div className="sk-cube-grid">
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
*/