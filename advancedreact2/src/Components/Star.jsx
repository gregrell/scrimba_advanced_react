import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs"
import { Toggle, ToggleButton, ToggledOn, ToggledOff } from "./Toggle/Toggle";


export default function Star(){
    return(
        <>
            <Toggle>
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