import React from "react";


// Here create context for use in children 
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

            {/*Use a context provider for the component children to get the context values */}
            <ToggleContext.Provider value={{open, handleClick}}>
                <div>{children}</div>
            </ToggleContext.Provider>
        </>
    )
}

export {ToggleContext}