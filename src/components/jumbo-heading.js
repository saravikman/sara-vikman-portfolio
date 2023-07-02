import React from "react"
import { useRef } from "react";
import { motion } from "framer-motion";

export default function JumboHeading({ title, children }) {
const ref = useRef(null)

  return (
    <motion.h1 
            className="text-5xl md:text-7xl py-10 pb-16"
            ref={ref} 
            initial={{ opacity: 0, translateY: 30, filter: "blur(30px)" }}
            whileInView={{ opacity: 1, translateY: 0, filter: "blur(0)", }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
            >
            {title}{children}
    </motion.h1>   
  );
}