import React from "react"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import JumboHeading from "../components/jumbo-heading"
import Keyword from "../components/keyword"

export default function ProjectInfo({ title, keywords, description }) {

const ref = useRef(null)
const isInView = useInView(ref, { amount: 0 })

  return (
    <div>
        <JumboHeading title={title}></JumboHeading>      
        <motion.div className="mb-10"
            ref={ref} 
            initial={{ opacity: 0, translateY: 30, filter: "blur(30px)" }}
            whileInView={{ opacity: 1, translateY: 0, filter: "blur(0)", }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2, }}
            viewport={{ once: true }}>
            <h2 className="text-2xl mb-6 font-medium">Project Overview</h2>
            <p className="text-lg">{description}</p>
        </motion.div>
        <motion.div className="mb-10"
            ref={ref} 
            initial={{ opacity: 0, translateY: 30, filter: "blur(30px)" }}
            whileInView={{ opacity: 0.5, translateY: 0, filter: "blur(0)", }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.4, }}
            viewport={{ once: true }}>
        {keywords.map((arr, index) => (
            <>
            <Keyword keyword={arr}></Keyword>
            </>
        ))}
        </motion.div>
    </div>
  );
}