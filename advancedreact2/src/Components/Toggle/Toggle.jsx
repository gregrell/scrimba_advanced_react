import React from "react";

//This is a headless component of toggle. It contains state and renders children. The handle click is sent to children as context
//It will flip the toggle bit only, and then render children either with the on or off toggle status

const toggleContext = React.createContext(null)


export function Toggle({children, onToggle,  ...rest}){

    const [open, setToggleStatus] = React.useState(false)

    React.useEffect(()=>{onToggle()},[open])

    function handleClick(){
        setToggleStatus(!open)
    }

   

    return(
        <>
            <toggleContext.Provider value={{open, handleClick}}>
                <div>{children}</div>
            </toggleContext.Provider>
        </>
    )
}

export {toggleContext}


export function ToggledOn({children}){

    const {open} = React.useContext(toggleContext)
    
    return open? (
        <>
                {children}
        </>
    ):null

}

export function ToggledOff({children}){

    const {open, handleClick} = React.useContext(toggleContext)
    
    return open? null:(
        <>
         
                {children}
          
        </>
    )

}


export function ToggleButton({children}){
    const {open, handleClick} = React.useContext(toggleContext)   

    return(
        <>
            <span onClick={handleClick}>
                {children}   
            </span>
        </>
    )
}