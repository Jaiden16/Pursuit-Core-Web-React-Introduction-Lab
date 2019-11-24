import React from "react"
import Post from "./Post"
import "./PostContainer.css"

class PostContainer extends React.Component{
    render(){
        return(
            <div className = "Post-Container">
                <h1>Post</h1>
                <Post/>
                <Post/>
            </div>
        )
    }
}

export default PostContainer;