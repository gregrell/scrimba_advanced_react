import React from "react";
import Suspense from "../Suspense/Suspense";



export default function PerformancePage(){

    const[showProducts, setShowProducts] = React.useState(false)

    const ProductList = React.lazy(()=>{
        return new Promise(resolve =>{
          setTimeout(()=> resolve(import("../Suspense/ProductList")),3000)
        })
    })


    //Note: React.Suspense is not the same as Suspense component below. 

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