import React from "react";
import Suspense from "../Suspense/Suspense";

const ProductList = React.lazy(()=>{
    return new Promise(resolve =>{
      setTimeout(()=> resolve(import("../Suspense/ProductList")),3000)
    })
})


export default function PerformancePage(){

    const[showProducts, setShowProducts] = React.useState(false)



    return(
        <>
            <h2>Performance</h2>
            <h3>Lazy Loading and Suspense</h3>
            <button onClick={()=> setShowProducts(prev => !prev)}>Show Products</button>
            <React.Suspense fallback={<Suspense/>}>
                {showProducts && <ProductList/>}
            </React.Suspense>

        </>
    )
}