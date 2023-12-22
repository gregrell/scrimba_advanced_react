import React from "react";

export default function MenuButton({children,onClick, ...rest}){
    return(
        <>
            <button onClick={onClick}>{children}</button>
        </>
    )
}