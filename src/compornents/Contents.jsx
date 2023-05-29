import React from "react"
import "./Contents.css"

let Contents = (works) =>{
    const show_content = works.works
    return(
        <div className="container">
            <h3 className="text-center">{show_content.title}</h3>
            <img className="d-block mx-auto" src={show_content.img} alt="" />
            <p>Description: {show_content.detailed_description}</p>
        </div>
    )
}

export default Contents