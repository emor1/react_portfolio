import React from "react"

let Skills = (props)=>{
    return(
        <div className='container' id="skills">
            <h2>Skills</h2>
            <div className="skill-list">
                {props.skill.map((skill, i)=>{
                    <div key={i}>
                    //     {/* <img src={skill.img} alt="" /> */}
                        <h3 className="skill-name">{skill.name}</h3>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Skills