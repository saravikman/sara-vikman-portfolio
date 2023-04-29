import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as indexStyles from "../components/index.module.css"
import ProjectCard from "../components/project-card"
import * as styles from "../css/style.css"
import { motion } from "framer-motion"
import Blob from "../components/blob"

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const projects = [
  {
    name: 'Unibet',
    work: 'Digital Design',
    image: 'https://saravikman.se/design/img/unibet/hockey-thumb.jpg',
  },
  {
    name: 'Agood Company',
    work: 'Graphic Design',
    image: 'https://saravikman.se/design/img/agood/agood_thumb2.jpg',
  },
  {
    name: 'Maria Casino',
    work: 'Graphic Design',
    image: 'https://saravikman.se/design/img/maria-casino/mc-thumb.jpg',
  },
];

const IndexPage = () => (
  <Layout>
    <div className="w-full">
      {/*
      <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />*/}

      <div className="grid grid-cols-12 pt-44 pb-24 px-6 overflow-hidden bg-[#f4f4f4] items-center relative md:min-h-[40rem]">
        <div className="bg-[#f4f4f4] bg-repeat absolute h-full w-full" style={{
              /*backgroundImage: 'url(https://arc.net/noise.png)',*/
        }}></div>
        <div className="md:col-start-2 col-span-12 md:col-span-6 z-10">
          <h1 className="text-5xl md:text-7xl">
            Digital designer, web developer and hobby photographer.
          </h1>

        </div>

      <Blob></Blob>
      </div>

      <div className=" z-10 relative">
        <div className="grid md:grid-cols-2">
        { projects.map(({name, work, image}) => {
            return (
              <ProjectCard name={name} work={work} image={image}></ProjectCard>
            );
          })}
        </div>
      </div>

    </div>

  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
