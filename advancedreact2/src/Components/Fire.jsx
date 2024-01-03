import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import useToggle from "../Hooks/useToggle";


export default function Fire(){

   

    const[on, toggleFunction] = useToggle({
        initialValue: false, 
        onToggle: toggledCallback
    })

    function toggledCallback(){
        if(on){
            console.log('fire')
        }
        else{
            console.log('extinguish')
        }
    }


    return(
        <>
            <AiOutlineFire className={`fire  ${on ? 'filled':''}`} onClick={toggleFunction}/>
        </>
    )
}