import React, {createContext, useState} from 'react';

export const SelectionsContext = createContext();

export function SelectionsContextProvider({children}){   

    const [selections, setSelections] = useState([]);
    /*

    const onAdd = ({detalleProducto})=> {   
        setCart([...cart, detalleProducto]);
    }
    const removeItem = (detalleProducto)=>{
        let itemRemovido = cart.filter(item => item.id !== detalleProducto.id);
        setCart(itemRemovido)
    }
    const costoTotal = cart.reduce((acc,{cantidad,precio}) => {
        return acc = acc + (precio*cantidad);
    },0);

    const clearCart = ()=> setCart([]);
    */

    return(
        <SelectionsContext.Provider value={{selections, setSelections}}>
            {children}
        </SelectionsContext.Provider>
    )
}
