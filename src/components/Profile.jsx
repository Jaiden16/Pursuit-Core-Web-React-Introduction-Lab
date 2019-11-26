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
                <div>
                    <img src={this.info.img} width='150' height='150' alt = "ryu"></img>
                </div>
                <div>
                    <h1>Name</h1>
                    <p>Title</p>
                    <p>Description</p>
                </div>

             </div>
        )
    }
}

export default Profile;