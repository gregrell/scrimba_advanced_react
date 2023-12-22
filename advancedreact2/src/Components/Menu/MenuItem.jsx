import React from "react";

export default function MenuItem({children,...rest}){
    return(
        <>
            <div className="menu-item">
                {children}
            </div>
        </>
    )
}