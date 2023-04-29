import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ProjectCard = ({ name, work, image }) => {
  
    return (
      <>
      <a href="/using-dsg">
        <div className="project-card w-full flex flex-col bg-[#111111] text-center h-[23vw] py-[6rem] md:py-[0] place-content-center overflow-hidden relative">
        <img src={image} className="project-image w-full object-cover opacity-90 "></img>
          <div className="left-0 right-0 absolute"> 
            <h2 className="text-white text-4xl font-thin">{name}</h2>
            <span className="text-white text-xs font-thin">{work}</span> 
          </div>
        </div>
      </a>
      </>
    )
  }
  
  export default ProjectCard
  