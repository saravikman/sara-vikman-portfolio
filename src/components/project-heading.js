import * as React from "react"
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"
import Keyword from "./keyword";

const ProjectHeading = ({ key, name, work, image, number }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const workArray = work;

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
//
    return (

      <>
      <div className="flex justify-between items-center group h-[15rem]">
        <div className="w-[50%] items-center">
        <a href="/using-dsg">
            <div className=""> 
              <span className="font-mono text-md">0{number}</span>
              <h2 className="text-black text-7xl mb-4 group-hover:underline">{name}</h2>
              {/*<span className="font-mono text-black text-xs border border-black rounded-full py-1 px-2 uppercase">{work}</span>*/}

            {workArray.map((arr, index) => (
              <>
              <Keyword keyword={arr}></Keyword>
              </>
            ))}

            </div>

        {/*
        <div>
        <img className={`hidden group-hover:inline-block right-36 w-[34rem] h-[34rem] rounded-full object-cover ${scrollPosition>540 ? "fixed top-[8rem] " : "absolute top-2"}`} src={image}>
        </img>
            </div>*/}

          {/*
        <motion.img ref={ref} 
            style={{
                opacity: isInView ? 1 : 0,
                transition: "all ease-out 0.5s"
            }}
            className={`transition-all duration-150 fixed top-44 hidden group-hover:inline-block right-36 w-[30rem] h-[30rem] rounded-full object-cover`} src={image}>
          </motion.img>*/}
        </a>
        </div>

        <motion.img ref={ref} 
            style={{
                //opacity: isInView ? 1 : 0,
                transition: "all ease-out 0.5s",
            }}
            className={`transition-all duration-50 opacity-0 group-hover:opacity-100 group-hover:inline-block w-[50%] h-[15rem] object-cover border-l border-r border-black`} src={image}>
          </motion.img>

      </div>
      </>
    )
  }
  
  export default ProjectHeading
  