import React from "react";
import classnames from "classnames";
import { AiFillFrown, AiFillSmile } from "react-icons/ai";


export default function Avatar({img, children, variant, className, ...rest}){

    let color
    if (variant ==="red"){
        color="red"
    }

    if (variant ==="green"){
        color="green"
    }

    if (variant ==="blue"){
        color="blue"
    }


    let allClasses = classnames(className, color, "avatar")


    return(
        <>
            <div {...rest} className={allClasses}>
                {img && <img alt="" src={img}></img>}
                <p>{children && children}</p>
                {!children && <AiFillSmile/>}
            </div>
        </>
    )
}