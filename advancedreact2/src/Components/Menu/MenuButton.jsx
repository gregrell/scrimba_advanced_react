import React from "react";
import { ToggleContext } from "./Menu";

export default function MenuButton({children,onClick, ...rest}){

    const {open, handleClick} = React.useContext(ToggleContext)

    return(
        <>
            <button onClick={handleClick}>{children}</button>
        </>
    )
}