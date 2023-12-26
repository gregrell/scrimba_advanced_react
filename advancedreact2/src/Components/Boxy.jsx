import React from "react";
import Switcher from "./Switcher";

export default function Boxy({children}){
    return(
        <>
        <Switcher>
            <Switcher.Button>
                <Switcher.Display>
                    {/* This is render props. switched is passed to the children in the Display component as children(switched) 
                    this line below acts as a function, returning what its supposed to based on the state of switched*/}
                    {(switched)=>{return <div className={`box ${switched ? "blue":"red"}`}>{switched ? "blue":"red"}</div>}}
                </Switcher.Display>
            </Switcher.Button>            
        </Switcher>
        </>
    )
}
