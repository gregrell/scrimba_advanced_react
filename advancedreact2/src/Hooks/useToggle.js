import React from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";


//custom hook accepts AN OBJECT of two values, 1. initialValue of the toggle state (on/off), and 
//2. a callback function to execute when the state changes. this will be called in useEffectOnUpdate custom hook.
//the reason it is an oject is so that you don't HAVE to specify a default value

export default function useToggle({
    initialValue=false, 
    onToggle=()=>{}
}){ 

    const [on, setToggleStatus] = React.useState(initialValue)
    
    function handleClick(){
        setToggleStatus(!on)
    }

    useEffectOnUpdate(onToggle, [on])

    return[on, handleClick]
}