import React from "react"
import Image from "./Ryu.png"
import "./List.css"

class Posts extends React.Component{
    constructor(){
        super();
        this.info = {
            image: Image,
            
        }
    }
    
    render(){
        return(
            <div className = "List">
                <div>
                    <img src = {this.info.image} width='150' alt = ""/>
                </div>

                <div className= "desc">
                    <p id = "name">Name</p>
                    <p id = "title">Title</p>
                    <p id = "desc">Description</p>
                </div>
            </div>
        )
    }
}

export default Posts