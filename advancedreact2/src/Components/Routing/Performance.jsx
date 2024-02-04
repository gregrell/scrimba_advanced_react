import React from "react";
import Suspense from "../Suspense/Suspense";
import SortedProductList from "../UseMemoExmaples/SortedProductList";



export default function PerformancePage(){

    const[showProducts, setShowProducts] = React.useState(false)
    const[showSortedProducts, setShowSortedProducts] = React.useState(false)

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
            
            <br/>
            <br/>
            <br/>
            <h3>useMemo use case and example</h3>
            <code>When the Sorted Product List component renders it calls a sort function. 
                The sorted products are not shown until sort is selected. The total cost of computation is done at component mount, 
                and each time the use state re-renders on sort/unsort the sort item call is not called and instead stored in useMemo</code>
            
            <br/>
            <br/>
            <button onClick={()=> setShowSortedProducts(prev => !prev)}>Show Products</button>
            {showSortedProducts && <SortedProductList/>}

        </>
    )
}