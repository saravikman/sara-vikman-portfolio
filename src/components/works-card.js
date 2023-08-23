import * as React from "react"
import { useRef } from "react";
import { motion, useInView } from "framer-motion"
import Keyword from "./keyword";
import { Link, graphql } from 'gatsby';

const WorksCard = ({ key, name, work, image, number, link }) => {
  const ref = useRef(null)
  //const whileInView = useInView(ref, { amount: 0 })
  const workArray = work;

  console.log(ref);
  return (
    <>
      <div className="group pb-4 md:pb-10">
        <div className="items-center">
          <Link to={link}>

            <motion.img
              ref={ref}
              initial={{ opacity: 0, translateY: 30, filter: "blur(30px)" }}
              whileInView={{ opacity: 1, translateY: 0, filter: "blur(0)", }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              viewport={{ once: true, amount: 0.7 }}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.5 },
              }}
              src={image}>
            </motion.img>

            <div className="mt-4 md:mt-10 text-left">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, translateY: 30, }}
                whileInView={{ opacity: 1, translateY: 0, }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true }}
                className="s:flex s:flex-wrap"
              >
                <span className="font-mono text-sm md:text-md pr-2">0{number}</span>
                <h2 className="text-black text-3xl md:text-5xl mb-4 group-hover:underline">{name}</h2>
                {/*{workArray.map((arr, index) => (
                    <><Keyword keyword={arr}></Keyword></>
                    ))}*/}
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
          </Link>
        </div>
      </div>
    </>
  )
}

export default WorksCard
