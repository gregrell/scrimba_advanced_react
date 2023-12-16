import React from "react";
import classnames from "classnames";

export default function Avatar({img, children, variant, className, ...rest}){

    let color
    if (variant ==="red"){
        color="red"
    }

    if (variant ==="green"){
        color="green"
    }



    let allClasses = classnames(className, color, "avatar")


    return(
        <>
            <div {...rest} className={allClasses}>
                {img && <img alt=""></img>}
                <p>{children}</p>

            </div>
        </>
    )
}