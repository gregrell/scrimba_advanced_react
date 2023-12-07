import React from "react";


export default function Button({children}){


    function handleClick(){
        console.log('logging in.')
    }

    return (
        <>
        <button onClick={handleClick}>{children}</button>

        </>
    )
}