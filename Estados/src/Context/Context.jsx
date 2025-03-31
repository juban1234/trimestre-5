import { Children, createContext } from "react";

export const couterContext = createContext()

export const CouterProvider = ({children}) =>{
    const [counter ,setCounter] = useState("")  
    
    return(
        <couterContext.Provider value={{counter,setCounter}}>
            {children}
        </couterContext.Provider>
    )
}

