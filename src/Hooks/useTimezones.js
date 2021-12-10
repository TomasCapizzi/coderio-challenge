import {useState, useContext} from 'react'
import { SelectionsContext } from '../Context/SelectionsContext';

const useTimezones = () => {

    const {selections, setSelections} = useContext(SelectionsContext)

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

    function getLocationTimezone(e,changeClassSearchBox){
        changeClassSearchBox()
        createTimezone(e.target.innerText)
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
        console.log(place[0].toUpperCase() + place.slice(1))

        if(place === 'buenos_aires' || place === 'catamarca' || place === 'cordoba' || place === 'jujuy' || place === 'la_rioja' || place === 'mendoza' || place === 'rio_gallegos' || place === 'salta' || place === 'san_juan' || place === 'san_luis' || place === 'tucuman' || place === 'ushuaia'){
            const respuesta = await fetch(totalTimezoneURL + zone + '/Argentina/' + place[0].toUpperCase() + place.slice(1));
            const res = await respuesta.json();
            console.log(res);
            setSelections([...selections,res])
        }
        else{
            const respuesta = await fetch(totalTimezoneURL + zone + '/' + place[0].toUpperCase() + place.slice(1));
            const res = await respuesta.json();
            console.log(res);
            setSelections([...selections,res])
        }


    }

    return {
        timezones,
        filter,
        zone,
        handler,
        fetchTimezone,
        changeSelect,
        getLocationTimezone,
        addOnClass,
        getInputValue,
        createTimezone

    }
}

export default useTimezones
