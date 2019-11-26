import React from "react"
import Image from "./r.jpg"
import "./Profile.css"

class Profile extends React.Component{
    constructor(){
        super();
        this.info = {
            image: Image,
            Name: "Jonathan Fagan",
            Title: "GamePlay Designer / FullStack Web Designer",
            Description: "I make Video Game and Webpages"
        }
    } 
    
    render(){
        let {image,Name,Title,Description} = this.info;
        console.log(image,Name)
        return(
            <div className = "Profile">
                <div>
                    <img src={image} width='150' height='150' alt = "ryu"></img>
                </div>
                <div>
                    <h1>{Name}</h1>
                    <p>{Title}</p>
                    <p>{Description}</p>
                </div>

             </div>
        )
    }
}

export default Profile;