import React from "react";

export default function useToggle(){
    const [on, setToggleStatus] = React.useState(false)
    
    function handleClick(){
        setToggleStatus(!open)
    }

    
}