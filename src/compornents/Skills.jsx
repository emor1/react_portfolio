import React from "react"

let Skills = (props)=>{
    return(
        <div className='container' id="skills">
            <h2>skill</h2>
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

// let PopupTest =()=> {
//     return(
//       <Popup  trigger={<button> Trigger</button>} modal nested>
//       <div >Popup content here !!</div>
//     </Popup>
//     )
  
// }
export default Skills