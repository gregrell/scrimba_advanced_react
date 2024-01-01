import React from "react";
import classnames from "classnames";
import { FaInfoCircle } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { IoIosWarning } from "react-icons/io";
import { AiFillCloseCircle } from "react-icons/ai";



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
                <div>
                {bannerType==='neutral' && <><FaInfoCircle color="#60A5FA"/> Update available</>}
                {bannerType==='success' && <><RiCheckboxCircleFill color="#34D399"/> Success!</>}
                {bannerType==='warning' && <><IoIosWarning color="#FBBF24"/> Attention!</>}
                {bannerType==='error' && <><AiFillCloseCircle color="#F87171"/> There is a problem with your application</>}
                </div>
                <div>
                    {children && children}
                </div>

                


            </div>
        </>
    )
}