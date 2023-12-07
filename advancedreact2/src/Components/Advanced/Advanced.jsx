import React from "react";
import Button from "./Button/Button";
import {AiFillDollarCircle} from 'react-icons/ai'

export default function Advanced (){


        function handleClick(){
            console.log("handled - again")
        }


        return(
            <div>
                <p className="App-header">
                    Advanced React Course
                </p>

                <h2>Button Component Props Review</h2>
                <Button onClick={handleClick} size="sm"><AiFillDollarCircle/>Buy Now!</Button>
            </div>
        )
    }