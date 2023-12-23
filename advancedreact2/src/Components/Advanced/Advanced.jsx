import React from "react";
import Button from "./Button/Button";
import {AiFillDollarCircle} from 'react-icons/ai'
import Avatar from "../Avatar/Avatar";
import Menu from "../Menu/Menu";
import MenuButton from "../Menu/MenuButton";
import MenuList from "../Menu/MenuList";
import MenuItem from "../Menu/MenuItem";
import Star from "../Star";


export default function Advanced (){


        function handleClick(){
            console.log("handled - again")
        }

        const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]



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

                <code>Compound Component Solution with Context Provider
                    Context is created at top level component, and provided to children. 
                    This example only passes toggle state and the handle click function to 
                    change it
                </code>
                <Menu>
                    <MenuButton>Click</MenuButton>
                    <MenuList>
                        {sports.map(function(sport){
                            return <MenuItem>{sport}</MenuItem>
                        })}
                    </MenuList>
                </Menu>

                <code>Headless Component Example. Toggle component with an On and Off Child used here. State is maintained in the Toggle component
                    and children are rendered based on if the state is toggled on or off. This allows for a 'generic toggle' component with reusable
                    children components based on the toggle situation.
                </code>
                <Star/>

            
            </div>
        )
    }