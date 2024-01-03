import React from "react";

export default function Card({children, icon, title, ...rest}){
    return(
        <>
            <div className="card">
                <div className="card-content">
                    <div className="card-iconbg">
                        <div className="card-icon">
                            {icon ? React.cloneElement(icon, {size:24}) : ''}
                        </div>
                    </div>
                    <div className="card-title">
                        {title? title:'Card'}
                    </div>
                    <div className="card-text">
                        {children ? children:'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.'}
                    </div>

                </div>

            </div>
        </>
    )
}