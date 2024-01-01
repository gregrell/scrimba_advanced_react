import React from "react";
import classnames from "classnames";


export default function Badge({children, className, color, variant, ...rest}){
    //default if not provided : square and gray
    let allClasses = classnames(className,  `${variant ? variant:"square"}`, `${color ? color:"gray"}`, "badge")

    return (
        <>
            <div className={allClasses}>{children && children}</div>
        </>
    )
}