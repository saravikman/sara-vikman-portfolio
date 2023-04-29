import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as indexStyles from "../components/index.module.css"
import ProjectCard from "../components/project-card"
import * as styles from "../css/style.css"

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

      <div style={{ /* Fixed header spacing */
            margin: `0 auto`,
            padding: `var(--space-4) var(--size-gutter)`,
          }}
        >
      </div>

      <div className="grid grid-cols-12 overflow-hidden bg-[#f4f4f4] items-center relative min-h-[40rem]">
        <div className="bg-[#e5e5e5] bg-repeat absolute h-full w-full" style={{
              backgroundImage: 'url(https://arc.net/noise.png)',
        }}></div>
        <div className="col-start-3 col-span-6 z-10">
          <h1 className="text-7xl">
            Lorem ipsum dolor sit amet. Dolisequetur lorem.
          </h1>
        </div>

        <span className="w-[30rem] h-[30rem] rounded-full" style={{
            background:'#F8E0E0',
            filter: 'blur(200px)',
            position:'absolute',
            top:'-15rem',
            right: '0',
            zIndex: '0',
          }}></span>

          <span style={{
            width:'30rem',
            height:'30rem',
            background:'#DBAAC4',
            borderRadius: '100%',
            filter: 'blur(200px)',
            position:'absolute',
            left:'-9rem',
            bottom: '0',
            zIndex: '0',
          }}></span>

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
