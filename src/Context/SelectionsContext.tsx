import React, {createContext, useState, ReactNode} from 'react';
import  {Timezone} from '../Types/Types';


export const SelectionsContext = createContext({});

interface Props {
    children: ReactNode
}

export function SelectionsContextProvider({children}: Props){   

    const [selections, setSelections] = useState<Timezone[]>([]);

    return(
        <SelectionsContext.Provider value={{selections, setSelections}}>
            {children}
        </SelectionsContext.Provider>
    )
}
