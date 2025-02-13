import { Children, createContext, useState, useMemo, useCallback } from "react"

 const FormContext = ({childer})=>{
    const contextForm  = createContext({});
    //const [screen ,setScreen] = useState("")
    // const data = useCallback(()=>{
        
    // }, [screen, setScreen])
    return(
        <contextForm.Provider>
            {Children}
        </contextForm.Provider>
    )
 }
 export default FormContext