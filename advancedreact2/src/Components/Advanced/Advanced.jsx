import React from "react";
import Button from "./Button/Button";
import {AiFillDollarCircle} from 'react-icons/ai'

export default function Advanced (){
        return(
            <div>
                <p className="App-header">
                    Advanced React Course
                </p>

                <h2>Button Component Props Review</h2>
                <Button><AiFillDollarCircle/>Buy Now!</Button>
            </div>
        )
    }