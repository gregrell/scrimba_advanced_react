import React from "react";
import { ToggleContext } from "./Menu";

export default function MenuList({children,...rest}){

    const {open} = React.useContext(ToggleContext)

    return open ? (
        <>
            <div>
                {children}
            </div>
        </>
    ):null
}