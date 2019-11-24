import React from "react"
import List from "./List"
import "./Contacts.css"


class Contacts extends React.Component{
    render(){
        return(
            <div className = "Contacts">
                <h2>Contacts</h2>
                <div><List/></div>
                <div><List/></div>
                <div><List/></div>
            </div>
        )
    }
}

export default Contacts;