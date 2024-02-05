import React from "react";
import fakeData from '../../fakeData'
import Product from "./ProductChild";

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




    return(
        <>
            <p> Time to render {delta} ms</p>
            <button onClick={()=>setSomeState(prev=>!prev)}>cause re-render</button>
            {products}
        </>
    )
}