import * as React from "react"
import { useRef, useState, useEffect } from "react";
import { Link, graphql } from 'gatsby';
import PhotoLayout from "../components/layout-photo"
import Seo from "../components/seo"
import { motion, useInView, useScroll, useTransform, } from "framer-motion"
import JumboHeading from "../components/jumbo-heading"
import Paragraph from "../components/paragraph"

export const query = graphql`
query ($slug: String!) {
  contentfulPhotography(slug: { eq: $slug }) {
      id
      slug
      title
      subtitle
      year
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
      <div className="bg-[#171717] relative h-[600px] lg:h-[100vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
          viewport={{ once: true }}
          className={`h-[600px] lg:h-[100vh] w-full bg-center lg:bg-fixed absolute z-10 transition-all duration-[0.4s] brightness-75 contrast-[0.9]`}
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${props.data.contentfulPhotography.hero.url})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}>
        </motion.div>
        <div className="w-4/5 mx-auto mb-6 md:mb-10 lg:mb-24 z-20 absolute bottom-0 left-0 right-0 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, translateY: 30, }}
            whileInView={{ opacity: 1, translateY: 0, }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            viewport={{ once: true }}
          >
            <JumboHeading title={props.data.contentfulPhotography.title} className="text-white text-5xl lg:text-8xl group-hover:underline mb-6"></JumboHeading>
            <h3 className="justify-end uppercase font-mono tracking-widest text-xs md:text-s text-white">{props.data.contentfulPhotography.subtitle}</h3>
          </motion.div>
        </div>
      </div>

      <div className="w-4/5 m-auto py-10 md:grid md:grid-cols-3 lg:grid-cols-2">
        {props.data.contentfulPhotography.introduction &&
          <>
            <Paragraph className="md:col-span-2 lg:col-span-1 md:py-10 text-sm md:text-lg">{props.data.contentfulPhotography.introduction.introduction}</Paragraph>
            <div className="md:col-span-1 pt-5 md:py-10 text-sm md:text-lg md:text-right">
              <p className="text-gray-400">Year</p>
              {props.data.contentfulPhotography.year}
            </div>
          </>
        }
      </div>

      <div className="w-11/12 md:w-4/5 m-auto grid grid-cols-2 flex-wrap gap-4 md:gap-14 items-center">
        {props.data.contentfulPhotography.images.slice(0, 3).map((image) => (

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

        {props.data.contentfulPhotography.images.slice(3, props.data.contentfulPhotography.images.length).map((image) => (

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

      <div className="m-auto text-center w-10/12 lg:w-4/5 mb-10 mt-14">
        <h4 className="my-4 font-sans">Other Projects</h4>

        {props.data.allContentfulPhotography.nodes.filter(listItem => listItem.title != props.data.contentfulPhotography.title).map(listItem => (
          <Link to={`../${listItem.slug}`}><p className="font-heading font-medium inline-block text-lg md:text-2xl mx-2 my-1 md:mx-6 md:my-2 leading-loose hover:opacity-50 transition-all">{listItem.title}</p></Link>
        ))}
      </div>

    </PhotoLayout>
  )
}

export const Head = ({ data }) => (
  <>
    <title>{data.contentfulPhotography.title}</title>
    <Seo title={data.contentfulPhotography.title} />
  </>
)

export default Photography
