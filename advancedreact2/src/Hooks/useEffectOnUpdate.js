import React from "react";

export default function useEffectOnUpdate(effectFunction, deps){
    const firstRender = React.useRef(true)

    React.useEffect(function(){
        if(firstRender.current){
            firstRender.current=false
        }
        else{
            effectFunction()
        }

    },deps)

}