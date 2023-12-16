import React from "react";
import Button from "./Button/Button";
import {AiFillDollarCircle} from 'react-icons/ai'
import Avatar from "../Avatar/Avatar";

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
                <Button onClick={handleClick} variant="success">success</Button>
                <Button onClick={handleClick} variant="warning">warning</Button>
                <Button onClick={handleClick} variant="danger">danger</Button>
                <Avatar variant='green'>GR</Avatar>
                <Avatar variant='red'></Avatar>
               
            </div>
        )
    }