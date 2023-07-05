import {useContext, useState} from 'react'

import { SelectionsContext } from '../Context/SelectionsContext';
import { Timezone, TimezoneContext } from '../Types/Types';

interface Props {
    searchBoxRef: React.RefObject<HTMLDivElement>
}


const useTimezones = ({searchBoxRef}: Props) => {

    const {selections, setSelections} = useContext(SelectionsContext) as TimezoneContext

    const totalTimezoneURL: string = "http://worldtimeapi.org/api/timezone/";
    const [timezones, setTimezones] = useState<string[]>([]);
    const [filter, setFilter] = useState<string[]>([]);
    const [zone, setZone] = useState<string>('');
    const [handler, setHandler] = useState<boolean>(false);


    async function fetchTimezone(e: any){
        const respuesta = await fetch(totalTimezoneURL + e.target.value)
        const res = await respuesta.json()
        setTimezones(res)
        setFilter(res)
        setHandler(true)
    }

    function changeSelect(e:React.ChangeEvent<HTMLSelectElement>){
        setHandler(false);
        setZone(e.target.value);
        e.target.value !== '' && fetchTimezone(e)
        //changeClassSearchBox();
        addOnClass();
    }

    function getLocationTimezone(e: React.MouseEvent<HTMLParagraphElement>,changeClassSearchBox: ()=> void){
        changeClassSearchBox()
        const elem = e.target as HTMLElement
        createTimezone(elem.innerText)
    }

    function addOnClass(){
        if(searchBoxRef.current){
            if(searchBoxRef.current.classList.contains('on')){
                console.log('Already has it')
             } else{
                 searchBoxRef.current.classList.add('on');
             }
        }
    }

    function getInputValue(e: React.ChangeEvent<HTMLInputElement>){
       // changeClassSearchBox()
        e.target.value.length>=1  ? setFilter(filter.filter(item => item.toLowerCase().includes(e.target.value))) : setFilter(timezones)
    }

    async function createTimezone(place: string){
        console.log(place[0].toUpperCase() + place.slice(1))

        if(place === 'buenos_aires' || place === 'catamarca' || place === 'cordoba' || place === 'jujuy' || place === 'la_rioja' || place === 'mendoza' || place === 'rio_gallegos' || place === 'salta' || place === 'san_juan' || place === 'san_luis' || place === 'tucuman' || place === 'ushuaia'){
            const respuesta = await fetch(totalTimezoneURL + zone + '/Argentina/' + place[0].toUpperCase() + place.slice(1));
            const res = await respuesta.json();
            setSelections([...selections,res])
        }
        else{
            const respuesta = await fetch(totalTimezoneURL + zone + '/' + place[0].toUpperCase() + place.slice(1));
            const res = await respuesta.json();
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
