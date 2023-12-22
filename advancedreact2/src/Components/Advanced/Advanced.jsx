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

                <h2>Reusability Component Review</h2>
                
                <code>This section is about reusability. Each of these buttons takes in children and renders them.</code>
                
                <Button onClick={handleClick} size="sm"><AiFillDollarCircle/>Buy Now!</Button>
                <Button onClick={handleClick} variant="success">success</Button>
                <Button onClick={handleClick} variant="warning">warning</Button>
                <Button onClick={handleClick} variant="danger">danger</Button>
                
                <code>These avatars conditionally render based on the children and props given to them</code>
                
                <Avatar variant='green'>GR</Avatar>
                <Avatar variant='blue'></Avatar>
                <Avatar variant='red' img="logo192.png"></Avatar>

                <h2>Prop Drilling Solutions</h2>

                <code>Compound Component Solution</code>
               
            </div>
        )
    }