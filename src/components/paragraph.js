import React from "react"
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Paragraph({ content, children, className }) {
    const ref = useRef(null)

    return (
        <motion.div
            className={`${className} font-sans text-sm md:text-lg text-neutral-800`}
            ref={ref}
            key="Paragraph"
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
        >
            <p>{content}{children}</p>
        </motion.div>
    );
}