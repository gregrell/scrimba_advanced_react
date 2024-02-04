import React from "react";
import fakeData from '../../fakeData'




export default function SortedProductList(){

    const start = Date.now()
    const sortedList = React.useMemo(()=>{
        return [...fakeData].sort((a,b)=> a.name.localeCompare(b.name)) // spread syntax used to not mutate the original array
    }, [fakeData])
    const end = Date.now()
    const totalTime = end-start



    function sortList(){
        const newArr = [...fakeData].sort((a,b)=> a.name.localeCompare(b.name)) // spread syntax used to not mutate the original array
        return newArr
    }

    const [selectSort, setSelectSort] = React.useState(false)

  

    function genFakeList(){
        return (selectSort ? sortedList:fakeData).map(product=>(
            <li key={product.id}>{product.name}</li>
        ))
    }

    return(
        <>
            <button onClick={()=>setSelectSort(prev=>!prev)}>{selectSort ? 'unsort':'sort'}</button>
            <code>Total Sort Calc time {totalTime}</code>
            <ul>
                {genFakeList()}
            </ul>
        </>
    )
}
