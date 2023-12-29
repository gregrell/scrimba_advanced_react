import React from "react";
import useEffectOnUpdate from "../../Hooks/useEffectOnUpdate"


const switchContext = React.createContext(null)

export  function Switcher({children, onSwitch}){


    const [switched, setSwitch] = React.useState(false)

    function handleClick(){
        setSwitch(prevState=>!prevState)
    }

    useEffectOnUpdate(onSwitch,[switched])

    return(
        <>
            <switchContext.Provider value={{switched, handleClick}}>
                {children}
            </switchContext.Provider>
        </>
    )
}

export {switchContext}

export function On({children}){
    const {switched} = React.useContext(switchContext)

    return switched ? (
        <>
            {children}
        </>
    ) : null
}

export function Off({children}){
    const {switched} = React.useContext(switchContext)
    return switched ? null : (
        <>
            {children}
        </>
    )
}

export function Button({children}){
    
    const {handleClick} = React.useContext(switchContext)

    return(
        <>
            <span onClick={handleClick}>
                {children}
            </span>
        </>
    )
}

export function Display({children}){
    const {switched} = React.useContext(switchContext)

    return(
        <>
            {children(switched)}
        </>
    )
}