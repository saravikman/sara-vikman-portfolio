import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion"

const ProjectHeading = ({ name, work, image }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <>
      <div className="group">
      <a href="/using-dsg" className="">
          <div className="my-16"> 
            <span className="font-mono text-md">01</span>
            <h2 className="text-black text-7xl mb-4 group-hover:underline">{name}</h2>
            <span className="font-mono text-black text-xs border border-black rounded-full py-1 px-2 uppercase">{work}</span> 
          </div>
      </a>
      
        <motion.img ref={ref} 
            style={{
                opacity: isInView ? 1 : 0,
                transition: "all ease-out 0.5s"
            }}
            className="hidden group-hover:inline-block fixed top-36 right-36 transition-all duration-150 w-[30rem] h-[30rem] rounded-full object-cover" src={image}>
        </motion.img>
      </div>
      </>
    )
  }
  
  export default ProjectHeading
  