import React from "react"

let Profile = (props) =>{
    const PageTitle = props.content.map((data,i)=>{
      return(
        <div className='col-lg-6 col-md-8 mx-auto'>
          <h1 className="fw-light">{data.title}</h1>
          <p className='lead text-muted'>
            {data.subtitle}
          </p>
        </div>
      )
    })
    return(
      <section className='py-5 text-center container'>
        <div className='row py-lg-5'>
        {PageTitle}
        </div>
      </section>
    )
}

export default Profile;