import React from "react"
import photo from "./r.jpg"
import "./Profile.css"

class Profile extends React.Component{
    constructor(){
        super();
        this.info ={
            img: photo
        }
    }
    
    render(){
        
        return(
            <div className = "Profile">
                <h1>Test</h1> 
                <img src={this.info.img} width='150' height='150' alt = "ryu"></img>
             </div>
        )
    }
}

export default Profile;