import React from "react";
import MenuButton from "./MenuButton";

const ToggleContext = React.createContext(null)


export default function Menu({children}){

    const [open, setOpen] = React.useState(false)

    function handleClick(){
        setOpen(!open)
    }

    

    return(
        <>
            <p>Open state: {open ? 'open':'closed'}</p>
            {/* Need to use implicit state to send to the children of this component
            could use React.Children here but will use context instead. React.Children has too many 
            problems with it */}
            <ToggleContext.Provider value={{open, handleClick}}>
                <div>{children}</div>
            </ToggleContext.Provider>
        </>
    )
}

export {ToggleContext}