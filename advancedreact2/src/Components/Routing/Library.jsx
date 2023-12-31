import React from "react";
import Badge from "../Badge/Badge";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";
import Testimonial from "../Testimonial/Testimonial";
import { IoCloudUpload } from "react-icons/io5";
import imageofwoman from "../Testimonial/RandomWoman25.jpeg"

export default function Library(){
    return(
        <>
            <h2>Project Component Library</h2>
            <a href='https://projects.scrimba.com/react-component-library' target="_blank" rel="noopener noreferrer">Scrimba Guidance</a>
            <br/>
           
            <h3>Badge Component</h3>
            <div className="presentation">
                <div className="presentationPort">
                    <ul>
                        <li>Gray <Badge variant="square">Badge</Badge></li>
                        <li>Red <Badge variant="square" color="red">Badge</Badge></li>
                        <li>Yellow <Badge variant="square" color="yellow">Badge</Badge></li>
                        <li>Green <Badge variant="square" color="green">Badge</Badge></li>
                        <li>Blue <Badge variant="square" color="blue">Badge</Badge></li>
                        <li>Indigo <Badge variant="square" color="indigo">Badge</Badge></li>
                        <li>Purple <Badge variant="square" color="purple">Badge</Badge></li>
                        <li>Pink <Badge variant="square" color="pink">Badge</Badge></li>
                    </ul>
             
                </div>
                <div className="presentationPort">
                <ul>
                        <li><Badge variant="pill">Badge</Badge></li>
                        <li><Badge variant="pill" color="red">Badge</Badge></li>
                        <li><Badge variant="pill" color="yellow">Badge</Badge></li>
                        <li><Badge variant="pill" color="green">Badge</Badge></li>
                        <li><Badge variant="pill" color="blue">Badge</Badge></li>
                        <li><Badge variant="pill" color="indigo">Badge</Badge></li>
                        <li><Badge variant="pill" color="purple">Badge</Badge></li>
                        <li><Badge variant="pill" color="pink">Badge</Badge></li>
                    </ul>
                </div>
            </div>

            <h3>Banners</h3>
            <div className="presentationPort">
                <ul>
                <li><Banner></Banner></li>
                <li><Banner variant='success'></Banner></li>
                <li><Banner variant='warning'></Banner></li>
                <li><Banner variant='error'></Banner></li>
                </ul>
            </div>  
            
            <div className="presentationPort">
                <ul>
                <li><Banner>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner></li>
                <li><Banner variant='success'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner></li>
                <li><Banner variant='warning'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner></li>
                <li><Banner variant='error'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</Banner></li>
                </ul>
            </div>


            <h3>Cards</h3>
            <br/>
            <br/>

            <div className="presentation">
                <Card title="Easy Deployment" icon={<IoCloudUpload/>}></Card>
                <br/>
                <Card title="Easy Deployment" icon={<IoCloudUpload/>} variant='shaded'></Card>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>

            <h3>Testimonial</h3>
            <br/>
            <br/>
            <div className="presentation">
                <Testimonial
                    image={imageofwoman}
                    name="Mary Andersons"
                    companyName="Workcation"
                    position="CTO"
                >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </Testimonial>                
            </div>

            <br/>
            <br/>
            <br/>   <br/>
            <br/>
            <br/>   <br/>
            <br/>
            <br/>   <br/>
            <br/>
            <br/>





         

        </>
    )
}

