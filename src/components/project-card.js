import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProjectCard = ({ name, work, image }) => {
  
    return (
      <>
        <div style={{
            background: `green`,
            width: `100%`,
            textAlign: `center`,
            padding:`9rem 5rem`,
            backgroundImage: `url(${image})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: `100%`,
        }}>

        <h2 className="text-white text-3xl">{name}</h2>
        <span className="text-white">{work}</span> 
        </div>


      </>
    )
  }
  
  export default ProjectCard
  