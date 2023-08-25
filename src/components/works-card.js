import * as React from "react"
import { useRef } from "react";
import { motion, useInView } from "framer-motion"
import Keyword from "./keyword";
import { Link, graphql } from 'gatsby';

const WorksCard = ({ key, name, work, image, number, link }) => {
  const ref = useRef(null)
  //const whileInView = useInView(ref, { amount: 0 })

  return (
    <>
      <div className="group pb-4 md:pb-10 max-w-full overflow-hidden rounded-lg border border-white hover:border-neutral-400 p-10 transition-all duration-500">
        <div className="items-center">
          <Link to={link}>
            <div className="w-full max-h-96 overflow-hidden">
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
                src={image}
                className="group-hover:scale-200"
              >
              </motion.img>
              {/*<motion.div
                ref={ref}
                initial={{ opacity: 0, translateY: 30, filter: "blur(30px)" }}
                whileInView={{ opacity: 1, translateY: 0, filter: "blur(0)", }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true, amount: 0.7 }}
                style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPositionX: "center" }}
                className="h-[45vh] w-full max-h-96 group-hover:scale-50"
              >
            </motion.div>*/}
            </div>

            <div className="mt-4 md:mt-5 text-left">
              <motion.div
                ref={ref}
                initial={{ opacity: 0, translateY: 30, }}
                whileInView={{ opacity: 1, translateY: 0, }}
                transition={{ ease: "easeOut", duration: 0.5 }}
                viewport={{ once: true }}
                className="s:flex s:flex-wrap"
              >
                <span className="font-mono text-sm md:text-md pr-2">0{number}</span>
                <h2 className="text-black text-3xl md:text-5xl mb-4">{name}</h2>
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
