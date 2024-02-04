import React from "react";
import fakeData from '../../fakeData'

export default function ProductList({sort,...rest}){

        function genFakeList(){
            return fakeData.map(product =>(
                <li key={product.id}>{product.name}</li>
            ))
        }

        if(sort){
            console.log('need to sort')
        }

        return(
        <>
            <ul>
                {genFakeList()}
            </ul>
        </>
    )
    
}