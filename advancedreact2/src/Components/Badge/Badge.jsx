import React from "react";
import classnames from "classnames";


export default function Badge({children, className, color, variant, ...rest}){

    const badgeColor = "gray"

    let allClasses = classnames(className, badgeColor, variant, "badge")



    return (
        <>
            <div className={allClasses}>{children && children}</div>
        </>
    )
}