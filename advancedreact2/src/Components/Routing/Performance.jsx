import React from "react";
import Suspense from "../Suspense/Suspense";
import SortedProductList from "../UseMemoExmaples/SortedProductList";
import ProductListParent from "../React_memoExamples/ProductListParent";


export default function PerformancePage(){

    const[showProducts, setShowProducts] = React.useState(false)
    const[showSortedProducts, setShowSortedProducts] = React.useState(false)
    const[showMemoProducts, setShowMemoProducts] = React.useState(false)

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

            <br/>
            <br/>
            <br/>
            <h3>React.memo()</h3>
            <code>Assume you have a component being rendered hundreds of times because the parent keeps getting re-rendered. 
                This causes computation time for each child component being rendered again and again. 
                React.memo() will prevent this from being re-rendered unless the props coming into it change. 
                React will just store that render in memory and return it instead of taking the CPU time to create each component again if props to it are the same. 
                Just export default React.memo(Component function) instead of exporting the Component function. Look at console log for this, there is a time calc for each 
                product component, that will only re-render when the parent mounts again, or if the color prop changes to the Product component
            </code>
            <button onClick={()=> setShowMemoProducts(prev => !prev)}>Show Memo Products</button>

            {showMemoProducts && <ProductListParent/>}

        </>
    )
}