import { createContext, useState } from "react";

export const Contexto = createContext()

export const ContextProvider = ({children}) => {
    const [ultimaTarea, setUltimaTarea] = useState("")
    let setTarea = (tarea) => {
        setUltimaTarea(tarea)
    }
    return (
        <Contexto.Provider value={{ultimaTarea, setTarea}}>
            {children}
        </Contexto.Provider>
    )
}