import React from "react"


let Skills = (props)=>{
    return(
        <div className='container' id="skills">
            <h2>Skills</h2>
            <div className="row row-cols-2 row-cols-md-3">
                {props.skills.map((skill, i)=>(
                    <div key={i} className="col">
                        <div className="p-3 text-center">
                            <h1>{skill.icon}</h1>
                            <h6>{skill.name}</h6>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}


export default Skills