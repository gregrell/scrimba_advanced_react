import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs"
import { Toggle, ToggleButton, ToggledOn, ToggledOff } from "./Toggle/Toggle";


export default function Star({onChange}){

   

    return(
        <>
            <Toggle onToggle={onChange}>
                    <ToggleButton>
                        <ToggledOn>
                            <BsStarFill className="star filled"/>
                        </ToggledOn>
                        <ToggledOff>
                            <BsStar className="star"/>
                        </ToggledOff>
                    </ToggleButton>                    
                </Toggle>               
        </>
    )
}