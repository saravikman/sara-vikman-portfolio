import * as React from "react"
import { useRef, useState, useEffect } from "react";
import { Link, graphql } from 'gatsby';
import ProjectLayout from "../components/project-layout"
import Seo from "../components/seo"
import { motion, useInView, useScroll, useTransform, } from "framer-motion"
import ProjectInfo from "../components/project-info"
import ProjectList from "../components/project-list"

export const query = graphql`
query ($slug: String!) {
  contentfulDesign(slug: { eq: $slug }) {
      id
      slug
      title
      keywords
      introduction {
        introduction
      }
      featuredImage {
        url
      }
      images {
        url
        id
        description
      }
      contentText {
        contentText
      }
  }
  allContentfulDesign {
    nodes {
        slug
        title
        keywords
        id
    }
  }
}
`
const Work = (props) => {
    const ref = useRef(null)
    console.log(props.data.contentfulDesign.keywords)
    return (
        <ProjectLayout>

            <div className="grid grid-cols-12 pt-44 pb-44 px-6 bg-gradient-to-t from-[#f4f4f4] to-[white] items-center">
                <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
                    <ProjectInfo title={props.data.contentfulDesign.title} keywords={props.data.contentfulDesign.keywords} description={props.data.contentfulDesign.introduction.introduction}></ProjectInfo>
                </div>
            </div>

            <div className="w-11/12 md:w-4/5 m-auto grid grid-cols-2 flex-wrap gap-4 md:gap-14 items-center -mt-36">
                <motion.img
                    ref={ref}
                    initial={{ opacity: 0, translateY: 30, }}
                    whileInView={{ opacity: 1, translateY: 0, }}
                    transition={{ ease: "easeOut", duration: 0.5 }}
                    className="w-full col-span-2 rounded-md" loading="lazy" src={props.data.contentfulDesign.featuredImage.url} />

                {props.data.contentfulDesign.images.slice(0, 2).map((image) => (

                    image.description == "full" ?
                        (<motion.img
                            ref={ref}
                            initial={{ opacity: 0, translateY: 30, }}
                            whileInView={{ opacity: 1, translateY: 0, }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            className="w-full col-span-2 rounded-md" loading="lazy" key={image.id} src={image.url} />)
                        : image.description == "square" ?
                            (<motion.img
                                ref={ref}
                                initial={{ opacity: 0, translateY: 30, }}
                                whileInView={{ opacity: 1, translateY: 0, }}
                                transition={{ ease: "easeOut", duration: 0.5 }} className="w-1/2 block m-auto col-span-2 rounded-md" loading="lazy" key={image.id} src={image.url} />)
                            : (<motion.img
                                ref={ref}
                                initial={{ opacity: 0, translateY: 30, }}
                                whileInView={{ opacity: 1, translateY: 0, }}
                                transition={{ ease: "easeOut", duration: 0.5 }} className="basis-1/2 rounded-md" loading="lazy" key={image.id} src={image.url} />)

                ))}
            </div>
            <div className="w-8/12 m-auto text-center py-24">
                <p className="text-lg leading-relaxed">
                    {props.data.contentfulDesign.contentText.contentText}
                </p>
            </div>
            <div className="w-11/12 md:w-4/5 m-auto grid grid-cols-2 flex-wrap gap-4 md:gap-14 items-center">
                {props.data.contentfulDesign.images.slice(2, props.data.contentfulDesign.images.length).map((image) => (

                    image.description == "full" ?
                        (<motion.img
                            ref={ref}
                            initial={{ opacity: 0, translateY: 30, }}
                            whileInView={{ opacity: 1, translateY: 0, }}
                            transition={{ ease: "easeOut", duration: 0.5 }}
                            className="w-full col-span-2 rounded-md" loading="lazy" key={image.id} src={image.url} />)
                        : image.description == "square" ?
                            (<motion.img
                                ref={ref}
                                initial={{ opacity: 0, translateY: 30, }}
                                whileInView={{ opacity: 1, translateY: 0, }}
                                transition={{ ease: "easeOut", duration: 0.5 }} className="w-1/2 block m-auto col-span-2 rounded-md" loading="lazy" key={image.id} src={image.url} />)
                            : (<motion.img
                                ref={ref}
                                initial={{ opacity: 0, translateY: 30, }}
                                whileInView={{ opacity: 1, translateY: 0, }}
                                transition={{ ease: "easeOut", duration: 0.5 }} className="basis-1/2 rounded-md" loading="lazy" key={image.id} src={image.url} />)

                ))}
            </div>

            <div className="m-auto text-center w-4/5 mb-10 mt-14">
                <h4 className="my-4">Other Projects</h4>

                {props.data.allContentfulDesign.nodes.filter(listItem => listItem.title != props.data.contentfulDesign.title).map(listItem => (
                    <Link to={`../${listItem.slug}`}><p className="inline text-lg md:text-2xl m-6 leading-loose hover:opacity-50 transition-all">{listItem.title}</p></Link>
                ))}
            </div>

        </ProjectLayout>
    )
}

export const Head = ({ data }) => (
    <>
        <title>{data.contentfulDesign.title}</title>
        <Seo title={data.contentfulDesign.title} />
    </>
)

export default Work
