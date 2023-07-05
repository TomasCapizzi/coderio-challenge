export interface Timezone  {
    timezone: string
    datetime: string
}

export interface TimezoneContext {
    selections: Timezone[]
    setSelections: React.Dispatch<React.SetStateAction<Timezone[]>>
}