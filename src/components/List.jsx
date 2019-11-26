import React from "react"
import Image from "./Ryu.png"
import "./List.css"

class Posts extends React.Component{
    constructor(){
        super();
        this.info = {
            image: Image,
            Name: "Jonathan Fagan",
            Title: "FullStack Web Designer/ GamePlay Designer",
            Description: "I make game's and webpages"
        }
    }
    render(){
        return(
            <div className = "List">
                <div>
                    <img src = {this.info.image} width='150' alt = ""/>
                </div>

                <div className= "desc">
                    <p id = "name">{this.info.Name}</p>
                    <p id = "title">{this.info.Title}</p>
                    <p id = "desc">{this.info.Description}</p>
                </div>
            </div>
        )
    }
}

export default Posts