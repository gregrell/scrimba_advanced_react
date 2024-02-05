import React from "react";
import ProductCSS from './Product.module.css'

function Product({product, color, ...rest}){

    function delay(ms) {
        return new Promise((resolve) => {
           setTimeout(resolve, ms);
        })
     }
     
     async function doItHere() {
        const start = Date.now()
        await delay(1);
        const end = Date.now()
        const delta = end-start
        console.log(delta)
        return delta
        
     }
     
     doItHere();

   
    return(
        <>
            <div className={ `${ProductCSS.product} ${color == 'red' ? ProductCSS.red:''}`}>
                {product.name}
            </div>
          
        </>
    )
}

export default React.memo(Product)