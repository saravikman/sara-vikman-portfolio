import * as React from "react"
import { useRef, useState, useEffect } from "react";
import { Link, graphql } from 'gatsby';
import PhotoLayout from "../components/photo-layout"
import Seo from "../components/seo"
import { motion, useInView, useScroll, useTransform, } from "framer-motion"

export const query = graphql`
query ($slug: String!) {
  contentfulPhotography(slug: { eq: $slug }) {
      id
      slug
      title
      subtitle
      introduction {
        introduction
      }
      hero {
        url
      }
      images {
        url
        id
        description
      }
  }
  allContentfulPhotography {
    nodes {
        slug
        title
        subtitle
        work
        id
        hero {
          url
        }
    }
  }
}
`
const Photography = (props) => {
  const ref = useRef(null)
  return (
    <PhotoLayout>
      <div className="bg-[#171717] relative h-[60vh] md:h-[100vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          viewport={{ once: true }}
          className={`h-[60vh] md:h-[100vh] w-full bg-cover bg-bottom md:bg-center bg-fixed flex place-items-end absolute z-10 transition-all duration-[0.4s]`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${props.data.contentfulPhotography.hero.url})`
          }}>
        </motion.div>
        <div className="w-4/5 mx-auto mb-6 md:mb-24 z-20 absolute bottom-0 left-0 right-0 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateY: 30, }}
            whileInView={{ opacity: 1, translateY: 0, }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-s md:text-md text-white">02</span>
            <h2 className="text-white text-5xl md:text-8xl mb-4 group-hover:underline">{props.data.contentfulPhotography.title}</h2>
            <h3 className="justify-end uppercase font-mono tracking-widest text-xs md:text-s text-white">{props.data.contentfulPhotography.subtitle}</h3>
          </motion.div>
        </div>
      </div>


      <div className="w-4/5 m-auto py-10">
        <div className="md:grid md:grid-cols-2 md:py-10 text-sm md:text-lg">{props.data.contentfulPhotography.introduction.introduction}</div>
      </div>
      <div className="w-11/12 md:w-4/5 m-auto grid grid-cols-2 flex-wrap gap-4 md:gap-14 items-center">
        {props.data.contentfulPhotography.images.map((image) => (

          image.description == "full" ?
            (<motion.img
              ref={ref}
              initial={{ opacity: 0, translateY: 30, }}
              whileInView={{ opacity: 1, translateY: 0, }}
              transition={{ ease: "easeOut", duration: 0.5 }}
              className="w-full col-span-2" loading="lazy" key={image.id} src={image.url} />)
            : image.description == "square" ?
              (<motion.img
                ref={ref}
                initial={{ opacity: 0, translateY: 30, }}
                whileInView={{ opacity: 1, translateY: 0, }}
                transition={{ ease: "easeOut", duration: 0.5 }} className="w-1/2 block m-auto col-span-2" loading="lazy" key={image.id} src={image.url} />)
              : (<motion.img
                ref={ref}
                initial={{ opacity: 0, translateY: 30, }}
                whileInView={{ opacity: 1, translateY: 0, }}
                transition={{ ease: "easeOut", duration: 0.5 }} className="basis-1/2" loading="lazy" key={image.id} src={image.url} />)

        ))}
      </div>

      <div className="m-auto text-center w-[90%] mb-10 mt-14">
        <h4 className="my-4">Other Projects</h4>

        {props.data.allContentfulPhotography.nodes.filter(listItem => listItem.title != props.data.contentfulPhotography.title).map(listItem => (
          <Link to={`../${listItem.slug}`}><p className="inline text-lg md:text-2xl m-6 leading-loose hover:opacity-50 transition-all">{listItem.title}</p></Link>
        ))}
      </div>

    </PhotoLayout>
  )
}

export const Head = () => <Seo title="Photos" />

export default Photography
