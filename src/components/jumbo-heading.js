import React from "react"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";


export default function JumboHeading({ title, children }) {
const ref = useRef(null)
const isInView = useInView(ref, { amount: 0 })

  return (
    <motion.h1 
            ref={ref} 
            initial={{ opacity: 0, translateY: 30, filter: "blur(30px)" }}
            whileInView={{ opacity: 1, translateY: 0, filter: "blur(0)", }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            >
        <h1 className="text-5xl md:text-7xl py-10 pb-16">
            {title}{children}
        </h1>
    </motion.h1>   
  );
}