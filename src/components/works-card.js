import * as React from "react"
import { useRef } from "react";
import { motion, useInView } from "framer-motion"
import Keyword from "./keyword";

const WorksCard = ({ key, name, work, image, number, link }) => {
    const ref = useRef(null)
    //const whileInView = useInView(ref, { amount: 0 })
    const workArray = work;

    console.log(ref);
    return (
      <>
      <div className="group pb-10">
        <div className="items-center">
        <a href={link}>

            <motion.img 
                ref={ref}
                initial={{ opacity: 0, translateY: 30, filter: "blur(30px)" }}
                whileInView={{ opacity: 1, translateY: 0, filter: "blur(0)", }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.5 },
                }}
                src={image}>
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
  