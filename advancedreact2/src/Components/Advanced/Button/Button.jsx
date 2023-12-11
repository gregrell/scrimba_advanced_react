import React from "react";
import classnames from "classnames" //third party class name support library - allows you to combine class names



export default function Button({children, className, size, variant, ...rest}){


    let color
    if (variant === 'success'){
        color = 'green'
    }
    if (variant === 'warning'){
        color = 'yellow'
    }
    if (variant === 'danger'){
        color = 'red'
    }
    


    let allClasses = classnames(className, size, color) //combined class names into a single variable - used below



    return (
        <>
        <button {...rest} className={allClasses}>{children}</button>

        </>
    )
}