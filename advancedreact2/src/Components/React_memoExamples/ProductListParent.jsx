import React from "react";
import fakeData from '../../fakeData'
import Product from "./ProductChild";
import classnames from "classnames";


import ProductCSS from './Product.module.css'




export default function ProductListParent(){

    const [someState, setSomeState] = React.useState(false)

    const start = Date.now()
    const products = fakeData.map(product=>{
        return(
            <li key={product.id} className={ProductCSS.li}>
                <Product product={product} color={'red'}/>
            </li>
        )    
       
    })
    const end = Date.now()
    const delta = end - start

    let allClasses = classnames( someState ? ProductCSS.yellow : ProductCSS.red)





    return(
        <>
            <button onClick={()=>setSomeState(prev=>!prev)} className={ someState ? ProductCSS.green : ProductCSS.blue}>cause re-render</button>
            {products}
        </>
    )
}