import React, {createContext, useState} from 'react';

export const SelectionsContext = createContext();

export function SelectionsContextProvider({children}){   

    const [selections, setSelections] = useState([]);

    return(
        <SelectionsContext.Provider value={{selections, setSelections}}>
            {children}
        </SelectionsContext.Provider>
    )
}
