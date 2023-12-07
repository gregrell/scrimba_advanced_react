import React from "react";


export default function Button({children, ...rest}){


    // function handleClick(){
    //     console.log('logging in.')
    // }

    return (
        <>
        <button {...rest}>{children}</button>

        </>
    )
}