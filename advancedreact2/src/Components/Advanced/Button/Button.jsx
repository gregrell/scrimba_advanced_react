import React from "react";


export default function Button({children, size, ...rest}){


    // function handleClick(){
    //     console.log('logging in.')
    // }

    return (
        <>
        <button {...rest} className={size}>{children}</button>

        </>
    )
}