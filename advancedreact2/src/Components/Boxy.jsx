import React from "react";
import Switcher from "./Switcher";

export default function Boxy({children}){
    return(
        <>
        <Switcher>
            <Switcher.Button>
                <Switcher.On>
                    <div className="box blue">blue                      
                    </div>
                </Switcher.On>
                <Switcher.Off>
                    <div className="box red">red</div>
                </Switcher.Off>
            </Switcher.Button>            
        </Switcher>
        </>
    )
}
