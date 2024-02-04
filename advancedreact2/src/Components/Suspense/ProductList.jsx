import React from "react";
import fakeData from '../../fakeData'

export default function ProductList(){

        function genFakeList(){
            return fakeData.map(product =>(
                <li key={product.id}>{product.name}</li>
            ))
        }
        return(
        <>
            <ul>
                {genFakeList()}
            </ul>
        </>
    )
    
}