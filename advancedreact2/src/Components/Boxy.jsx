import React from "react";
import Switcher from "./Switcher";

export default function Boxy({children}){
    return(
        <>
        <Switcher>
            <Switcher.Button>
                <Switcher.Display>
                    {(switched)=>{return <div className={`box ${switched ? "blue":"red"}`}>{switched ? "blue":"red"}</div>}}
           
                </Switcher.Display>
            </Switcher.Button>            
        </Switcher>
        </>
    )
}
