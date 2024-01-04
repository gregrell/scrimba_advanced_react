import React from "react";
/* Here's an example of styling using CSS modules. Stylesheet done in the same component folder with Card.module.css  */

import CardCSS from './Card.module.css'



export default function Card({children, icon, title, variant, ...rest}){
    return(
        <>
            <div className={`${CardCSS.card} ${variant=='shaded' ? CardCSS.shaded: ''}`}>
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