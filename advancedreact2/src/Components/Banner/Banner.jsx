import React from "react";
import classnames from "classnames";

export default function Banner({children, variant, className, ...rest}){
    //Banner types: success, warning, error, neutral
    let bannerType = variant ? variant:"neutral" //default selection    
    let color = 'blue' //default
    if(bannerType === 'success'){
        color = 'green'
    }
    if(bannerType === 'warning'){
        color = 'yellow'
    }
    if(bannerType === 'error'){
        color = 'red'
    }
    
    let allClasses = classnames(className, "banner",  `${bannerType ? bannerType:"neutral"}`, `${color ? color:"blue"}`)


    return(
        <>
            <div className={allClasses}>


            </div>
        </>
    )
}