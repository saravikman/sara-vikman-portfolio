import * as React from "react"
import { useRef } from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import JumboHeading from "../components/jumbo-heading"
import Paragraph from "../components/paragraph"
import { motion, useInView } from "framer-motion";

const About = () => {

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0 })

  return (
    <Layout>
      <div className="w-full items-center">
        <div className="w-11/12 md:w-4/5 m-auto pt-40">
          <JumboHeading className="mb-6 md:mb-16">About me</JumboHeading>

          <Paragraph className="md:w-2/4">I'm a multi-disciplinary designer with strong technical skills and a passion for the digital medium. With a bachelor's degree in Informatics and three years experience of working as a digital designer I'm constantly expanding my knowledge on graphic design, web design, web development, as well as UX and UI.
            I've also dedicated some space on this site for my main hobby, photography.</Paragraph>


          <motion.div className="mt-16"
            ref={ref}
            initial={{ opacity: 0, translateY: 30 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.4, }}
            viewport={{ once: true }}>
            <h3 className="text-lg font-sans font-bold pb-4">Find me on these spaces:</h3>
            <ul>
              <li className="border-b-2 max-w-sm py-2 flex flex-wrap items-center justify-between">
                Behance <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg></li>
              <li className="border-b-2 max-w-sm py-2 flex flex-wrap items-center justify-between">
                ArtStation <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg></li>
              <li className="border-b-2 max-w-sm py-2 flex flex-wrap items-center justify-between">
                LinkedIn <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg></li>
            </ul>
          </motion.div>

        </div>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="About" />

export default About
