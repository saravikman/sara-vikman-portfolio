import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion"
import Keyword from "./keyword";

const WorksCard = ({ key, name, work, image, number, link }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0 })
    const workArray = work;

    console.log(ref);
    return (
      <>
      <div className="group pb-10">
        <div className="items-center">
        <a href={link}>
    
            <motion.img 
                ref={ref} 
                style={{
                    opacity: isInView ? 1 : 0,
                    filter: isInView ? 'blur(0)' : 'blur(30px)',
                    transition: "all ease-out 0.2s",
                }}
                className={`scale-[1] group-hover:scale-[1.05]`} src={image}>
            </motion.img>

            <div className="mt-10"> 
                <motion.div 
                    ref={ref} 
                    initial={{ opacity: 0, translateY: 30, }}
                    whileInView={{ opacity: 1, translateY: 0, }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    viewport={{ once: true }}
                    >
                    <span className="font-mono text-md">0{number}</span>
                    <h2 className="text-black text-5xl mb-4 group-hover:underline">{name}</h2>
                    {workArray.map((arr, index) => (
                    <><Keyword keyword={arr}></Keyword></>
                    ))}
                </motion.div>

                {/*<span className="font-mono text-md">0{number}</span>
                <h2 className="text-black text-7xl mb-4 group-hover:underline">{name}</h2>

                {workArray.map((arr, index) => (
                <>
                <Keyword keyword={arr}></Keyword>
                </>
                ))}
                */}

            </div>
          </a>
        </div>
      </div>
      </>
    )
  }
  
  export default WorksCard
  