import React from "react";
import CardCSS from './Card.module.css'

export default function Card({children, icon, title, ...rest}){
    return(
        <>
            <div className={CardCSS.card}>
                <div className={CardCSS.contentbox}>
                    <div className={CardCSS.iconbg}>
                        <div className={CardCSS.icon}>
                            {icon ? React.cloneElement(icon, {size:24}) : ''}
                        </div>
                    </div>
                    <div className={`${CardCSS.title} ${CardCSS.red}`}>
                        {title? title:'Card'}
                    </div>
                    <div className={CardCSS.text}>
                        {children ? children:'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}
                    </div>

                </div>

            </div>
        </>
    )
}