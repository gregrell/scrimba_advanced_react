import React from "react";
import { AiOutlineFire } from "react-icons/ai";
import useToggle from "../Hooks/useToggle";
import useEffectOnUpdate from "../Hooks/useEffectOnUpdate";


export default function Fire(){

   

    const[on, toggleFunction] = useToggle({
        initialValue: true, 
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