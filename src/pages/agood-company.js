import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Keyword from "../components/keyword"
import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const content = {
    title: 'Agood Company',
    work: ['Graphic Design', 'Photography'],
    featuredImage: 'https://www.datocms-assets.com/99032/1682363960-agood_thumb2.jpg',
    description: 'A Good Company is a lifestyle brand with a truly sustainable profile. For A Good Company I had responsibility for producing creatives for marketing activities, both digital and print, developing packaging design, product design and design for retail, as well as product photography and digital imagery for the website.',
  };

const AgoodCompany = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { amount: 0 })
return (
  <Layout>
    
    <div className="w-full">

      <div className="grid grid-cols-12 pt-44 pb-24 px-6bg-[#f4f4f4] items-center">
        <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
                {content.work.map((arr, index) => (
                    <><Keyword keyword={arr}></Keyword></>
                    ))}
            <motion.h1 
                    ref={ref} 
                    initial={{ opacity: 0, translateY: 30, }}
                    whileInView={{ opacity: 1, translateY: 0, }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    viewport={{ once: true }}
                    >
            <h1 className="text-5xl md:text-8xl py-10 pb-16">
                {content.title}
            </h1>
            </motion.h1>         
          <motion.div
            ref={ref} 
            initial={{ opacity: 0, translateY: 20, }}
            whileInView={{ opacity: 1, translateY: 0, }}
            transition={{ ease: "easeOut", duration: 0.5, delay: 0.2, }}
            viewport={{ once: true }}>
          <h2 className="text-2xl mb-6 font-medium">Project Overview</h2>
          <p>{content.description}</p>
          </motion.div>
        </div>
      </div>
      <img className="w-full rounded-sm" src={content.featuredImage}></img>

    </div>

  </Layout>
)
}

export const Head = () => <Seo title="Home" />

export default AgoodCompany
