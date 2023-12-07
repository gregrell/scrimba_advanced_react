import React from "react";
import Button from "./Button/Button";
import {AiFillDollarCircle} from 'react-icons/ai'

export default function Advanced (){


        function handleClick(){
            console.log("handled")
        }


        return(
            <div>
                <p className="App-header">
                    Advanced React Course
                </p>

                <h2>Button Component Props Review</h2>
                <Button onClick={handleClick} size="lg"><AiFillDollarCircle/>Buy Now!</Button>
            </div>
        )
    }