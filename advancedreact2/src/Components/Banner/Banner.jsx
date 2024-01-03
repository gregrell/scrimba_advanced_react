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
    let subtextColor = '#1C51B9'
    if(bannerType === 'success'){
        color = 'green'
        subtextColor='#047857'
    }
    if(bannerType === 'warning'){
        color = 'yellow'
        subtextColor='#B45309'
    }
    if(bannerType === 'error'){
        color = 'red'
        subtextColor='#B45309'
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
                <div style={{color: subtextColor, fontWeight: '400'}}>
                    {children && children}
                </div>

                


            </div>
        </>
    )
}